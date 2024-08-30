"use client"
import { Navigation } from '@/components/Navigation'
import React, { useEffect, useState } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Command } from '@/components/ui/command'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import useDeviceType from '@/app/Device'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
 
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Box, GripHorizontal, Heart, HeartOff, MessageCircle, Send, Share2, YoutubeIcon } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { InfiniteMovingCourses } from '@/components/InfiniteMovingCards'
import { Badge } from '@tremor/react'
import axios, { CancelTokenSource } from 'axios'
import { RiHeartFill } from '@remixicon/react'
import YouTubePlayer from 'react-player/youtube'
import Link from 'next/link'
import { comment } from 'postcss'
import { useToast } from '@/components/ui/use-toast'
import useCurrentUserStore from '@/app/Store'
import { nu_api_base_url } from '@/app/Contants'
interface Post {
 like: number,
 comment?: string
}
interface PostComment {
  comment: string
 }
const Retsepile = () => {
  const isDesktop: boolean = useDeviceType();
  const userDetails = useCurrentUserStore((state)=> state.user )
  const [goal, setGoal] = React.useState(350)
  const [Post, setPost] = useState<Post>()
  const [commentVar, setComment] = useState<string>()
  const likeClicked = useCurrentUserStore((state) => state.likeClicked);
  const setLikeClicked = useCurrentUserStore((state) => state.setLikeClicked);
  const { toast } = useToast()

  useEffect(() => {
    let source: CancelTokenSource;

    const getAllPosts = async () => {
      try {
        source = axios.CancelToken.source();
        const response = await axios.get(`${nu_api_base_url}/retsepile/66454198384658227e748c6e`, {
          cancelToken: source.token
        });
        setPost(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          console.log(error);
        }
      }
    };

    getAllPosts();

    return () => {
      if (source) {
        source.cancel('Component unmounted');
      }
    };
  }, []);

  async function updateRetsepilePost(postId: string): Promise<void> {
    try {
      const url = `${nu_api_base_url}/retsepile/${postId}`;
      const response = await axios.get<Post>(url);
      const currentLike = response.data.like;
      const newLike = currentLike + 1;
      const body: Post = { like: newLike };
      await axios.put(url, body);
      console.log(`Post ${postId} updated successfully.`);
      setPost(response.data)
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  }

  async function updateRetsepilePostComment(postId: string): Promise<void> {
    try {
      const body = { comment: commentVar };
      const response = await axios.put(`${nu_api_base_url}/retsepile/${postId}`, body);
      console.log(`Post ${postId} updated successfully.`);
      // Assuming response.data.comment contains the updated comment value
      // Update the state or perform any necessary actions with the updated comment value
      // For example:
      setComment(response.data.comment);
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  }

  const handleComment = () => {
    updateRetsepilePostComment("66454198384658227e748c6e")
  }
  
  // localStorage.removeItem("likeClicked")
  const handleLike = () => {
    updateRetsepilePost("66454198384658227e748c6e")
    setLikeClicked(!likeClicked);
  }

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  function copyToClipboard(text: any) {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast({
          title: "Link copied to clipboard",
          description: text,
        })
      })
      .catch((error) => {
        toast({
          title: "Failed to copy link to clipboard",
          description: error,
        })
      });
  }
  
  const handleCopy = ()=> {
    const linkToCopy = 'https://www.nucleusdevs.com/retsepile/programming';
    copyToClipboard(linkToCopy);
  }

  return (
    <main>
      <div className='flex justify-center' style={{
      }}>
        <Navigation />
      </div>
      <div className='flex w-full  gap-3 justify-center lg:top-5   items-center lg:h-full h-[120%] fixed bottom-7'>
      <Card style={{
          backdropFilter: "blur(5px)",
          borderWidth: "1px",
      }}
        className="flex justify-center dark:bg-[#09090bd9] lg:w-[80%] mt-16 lg:mt-0 h-[100%] lg:h-[85%] bg-[#FFFFFFFF]"
      >
        <div className='lg:w-[60%] sm:w-[100%] h-full p-2 ' style={{
        borderWidth: "1px",
        borderTopWidth: "0px",
        borderBottomWidth: "0px", 
    }}>       

          <Command className="rounded-lg border shadow-md p-2" style={{ background: "rgba(255, 255, 255, 0)", borderWidth: "0px"}}>
            <h4 className="scroll-m-20 p-2 pl-5 text-xl font-extrabold tracking-tight lg:text-xl">
                {/* Community Of Creatives */}
            </h4>
            {!isDesktop && <div className="p-5 mt-48 lg:mt-0">
            <div className="flex items-center gap-1">
              <Avatar>
                <AvatarImage src="/me2.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                Retsepile Raymond Shao
                <div>
                  <p style={{color:"gray", fontSize: 14 }}>Programming with Raymond</p>
                </div>
              </div>
            </div>
            </div>
            }
            <div className=''>
              {/* <InfiniteMovingCourses /> */}
              <Image
                  src="/banner.png"
                  alt="Nucleus Logo"
                  className="relative"
                  width={920}
                  height={24}
                  priority
                  style={{
                    borderRadius:"8px 8px 8px 8px"
                  }}
              />
            </div>
            <ScrollArea style={{borderWidth: "0px"}} className="h-[100%] flex flex-col gap-5 w-full rounded-md border p-4">
              <div className='flex flex-col gap-5'>
                <Card className="w-[100%]" id='blogging'>
                  <CardHeader>
                    <CardTitle>Introduction to programming</CardTitle>
                    <p style={{color:"gray", fontSize: 12 }}>May 15, 2024</p>
                    <CardDescription>
                    <br/>
                    <h1><b>What is  programming</b></h1>
                    <br/>
                    The process of creating instructions  for computers to perform tasks. 
                    <br/>
                    It involves code using <b>programming languages</b>
                    <br/><br/>
                    <b>Programming language</b> is a set of syntax and rules that computers can understand and execute 
                    <br/><br/>
                    <b>In layman&apos;s terms</b>
                    <br/>
                    It is a language through which humans communicate with computers to make them do what they want.
                    <br/><br/>
                    As Albert Einstein famously said, &quot;Example is not one of the ways of learning, it&apos;s the only way of learning&quot;. Let me make you an example.
                    <br/><br/>
                    <b>Example</b>
                    <p>Imagine you have a robot named Kali. You want Kali to make you a sandwich.</p>
                    <br/>
                    As a programmer you would approuch this by giving a set of instructions to Kali the robot, like this:
                    <p><b>Instructions</b></p>
                    <br/>
                    <p>1. <b>Pick up two slices of bread.</b></p>
                    <br/>
                    <p>2. <b>Spread peanut butter on one slice.</b></p>
                    <br/>
                    <p>3. <b>Spread jelly on the other slice.</b></p>
                    <br/>
                    <p>4. <b>Put the two slices together.</b></p>
                    <br/>
                    <p>5. <b>Serve the sandwich</b></p>
                    <br/>
                    <p>In a nutshell, this is what programming entails, but this is a high-level view. To achieve this in practice, as a programmer, you will choose the appropriate programming language for the task. Different problems may need different approaches, which means you won&apos;t always use the same programming language to solve all sorts of problems.</p>
                    <br/><br/><br/>
                    <b>Why learn programming?</b>  
                    <br/>
                    <p>Learning to program opens up a world of possibilities. Here are a few reasons why programming is a valuable skill:</p>  
                    <br/>
                    <p>1. <b>Problem Solving:</b> Programming teaches you how to break down complex problems into manageable pieces, enhancing your analytical and logical thinking skills.</p>
                    <br/>
                    <p>2. <b>Career Opportunities:</b> There is a high demand for skilled programmers in various industries, from tech to healthcare, finance, and beyond.</p>
                    <br/>
                    <p>3. <b>Creativity:</b> Programming allows you to build something from scratch, whether it&apos;s a simple website, a mobile app, or a complex software system.</p>
                    <br/>
                    <p>4. <b>Automation:</b> With programming, you can automate repetitive tasks, making processes more efficient and saving time.</p>
                    <br/>
                    <p>5. <b>Understanding Technology:</b> In an increasingly digital world, understanding how software and hardware interact can give you a better grasp of the technology you use every day.</p>
                    <br/><br/>
                    <p><b>Popular programming languages and their usage</b></p>
                    <br/>
                    <ul className="list-disc pl-5 space-y-4">
                        <li>
                            <b>Python:</b> Known for its simplicity and readability, Python is great for beginners and is widely used in web development, data science, artificial intelligence, and more.
                        </li>
                        <br/>
                        <li>
                            <b>JavaScript:</b> Essential for web development, JavaScript allows you to create interactive websites and is used both on the client-side and server-side (with Node.js).
                        </li>
                        <br/>
                        <li>
                            <b>Java:</b> A versatile language used in many applications, from web to mobile to enterprise software. It&apos;s known for its portability across different platforms.
                        </li>
                        <br/>
                        <li>
                            <b>C++:</b> An extension of the C language, C++ is used in system/software development, game development, and performance-critical applications.
                        </li>
                        <br/>
                        <li>
                            <b>Ruby:</b>  Known for its elegant syntax, Ruby is popular in web development, particularly with the Ruby on Rails framework.
                        </li>
                        <br/>
                        <li>
                            <b>Swift:</b> Developed by Apple, Swift is used for iOS and macOS application development.
                        </li>
                    </ul>
                    <br/>
                    <h1><b>The Programming Process</b></h1>
                    <p>The process of programming typically involves several key steps:</p>
                    <br/>
                    <ol className="list-decimal list-inside space-y-4">
                        <li>
                            <b>Planning:</b> Before writing any code, it&apos;s important to plan out what the program will do. This involves understanding the problem, defining the requirements, and designing the solution.
                        </li>
                        <li>
                            <b>Writing Code:</b> Using a programming language, you write the instructions that the computer will follow.
                        </li>
                        <li>
                            <b>Testing:</b> After writing the code, you need to test it to ensure it works as expected. This involves debugging and fixing any errors that arise.
                        </li>
                        <li>
                            <b>Documentation:</b> Good programmers document their code so that others (and their future selves) can understand what the code does and how it works.
                        </li>
                        <li>
                            <b>Maintenance:</b> Once the program is in use, it may need updates and improvements over time. This involves maintaining the codebase and making necessary changes.
                        </li>
                    </ol>

                    <br/><br/>
                    <h1><b>Getting Started with Programming</b></h1>
                    <p>If you&apos;re new to programming, here are some steps to help you get started:</p>
                    <br/>
                    <ol className="list-decimal list-inside space-y-4">
                        <li>
                            <b>Choose a Language:</b> Start with a beginner-friendly language like Python or JavaScript.
                        </li>
                        <li>
                            <b>Find Resources:</b> There are many online resources, including tutorials, courses, and forums, where you can learn and get help.
                        </li>
                        <li>
                            <b>Practice:</b> The best way to learn programming is by doing. Work on small projects and gradually take on more complex challenges.
                        </li>
                        <li>
                            <b>Join a Community:</b> Engage with other learners and experienced programmers. Communities can provide support, answer questions, and offer valuable feedback.
                        </li>
                        <li>
                            <b>Stay Curious:</b> Technology is always evolving, and there’s always something new to learn. Keep exploring and expanding your knowledge.
                        </li>
                    </ol>

                    <div className='flex gap-3 pt-5'>
                      <Link href={"/retsepile"}>
                        <Badge className='pb-1' >
                            <a href='/retsepile'>
                                Back
                            </a>
                        </Badge>
                      </Link> 
                      <Link href={"https://youtu.be/MfajJFQ0bj4?si=arotPAnkR_-sh5JD"}>
                        <YoutubeIcon />
                      </Link>
                    </div>
                    </CardDescription>
                  </CardHeader>
                </Card>
              <div className='pb-5 flex justify-around'>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className='flex gap-2 items-center text-gray-400'>
                          {!localStorage.getItem("likeClicked") ? <Heart color='gray' onClick={handleLike}/> : <RiHeartFill />}
                          <p className='text-xs'>{Post?.like}</p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Like</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Box color='gray'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Suggestion box</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                          <Drawer>
                          <DrawerTrigger asChild>
                            <MessageCircle color='gray'/>
                          </DrawerTrigger>
                          <DrawerContent>
                            <div className="mx-auto w-full max-w-sm">
                              <DrawerHeader>
                                <DrawerTitle>Comments</DrawerTitle>
                                <DrawerDescription></DrawerDescription>
                                </DrawerHeader>
                                <div className="p-4 pb-0">
                                  <div className="flex items-center gap-1">
                                    <Avatar>
                                      <AvatarImage src="/me2.png" />
                                      <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      Retsepile Raymond Shao
                                      <div>
                                        <p style={{color:"gray", fontSize: 14 }}>Video comming out soon</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-3 h-[120px]">
                                    <div className='absolute left-0 top-32 mt-2'>
                                      <svg width="70" height="150">
                                        <path d="M50,10 Q35,90 100,90" fill="none" stroke="white" strokeWidth="2" />
                                      </svg>
                                    </div>
                                    <div className='absolute top-52 left-20'>
                                      {Post?.comment}
                                      <p style={{color:"gray", fontSize: 12 }}>Comment</p>
                                    </div>
                                  </div>
                                </div>
                                <DrawerFooter>
                                <div className=" w-full ">
                                  <div className="flex pb-2">
                                    <HoverCard >
                                      <HoverCardTrigger><GripHorizontal  className="pl-2"/></HoverCardTrigger>
                                      <HoverCardContent>
                                      <p style={{fontSize:12, color:"rgba(255, 255, 255, 0.716)"}}>This message will only be seen by a person or a group of people you send a temp-on token to </p>
                                      </HoverCardContent>
                                    </HoverCard>
                                    <div>
                                      <Send onClick={handleComment} className="pl-2"/>
                                    </div>
                                  </div>
                                  <div className="pl-2">
                                  {/* <p style={{fontSize:12, color:"rgba(255, 255, 255, 0.716)"}}>Temp-On: 3423erwwx3243</p> */}
                                  <Textarea onChange={(e)=>{setComment(e.target.value)}} cols={1} rows={2} className="resize-none w-full p-2" />
                                  </div>
                                </div>
                                </DrawerFooter>
                              </div>
                            </DrawerContent>
                          </Drawer>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Comment</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Share2 color='gray' onClick={handleCopy}/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Share</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </ScrollArea>
          </Command>
      </div>
      </Card>
    </div>
    </main>
  )
}
export default Retsepile
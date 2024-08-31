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
import { Badge } from '@tremor/react'
import axios, { CancelTokenSource } from 'axios'
import { RiHeartFill } from '@remixicon/react'
import Link from 'next/link'
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
    const linkToCopy = 'https://www.nucleusdevs.com/retsepile';
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
                    <div className='flex gap-3'>
                      <Badge className='pb-1'>
                        read more ...
                      </Badge>
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
              <Card className="w-[100%] p-0.5 pl-3 ">
                <div>
                    <CardHeader>
                        <CardTitle>Psychedelic collection of consciousness</CardTitle>
                        <CardDescription>
                          Whats crazy is the extension of our personal and collective minds, us putting out ideas (Ridic Originals, Nucleus Creative Studio) beliefs and opinions that form a digital society, culture(Daeman.) and the world. 
                          This is a psychedelic collection of consciousness.
                        </CardDescription>
                    </CardHeader>
                    <div className="w-[100%] p-0.5 pl-3 flex justify-center">
                    <Image
                        src="/psychodelic.jpg"
                        alt="Nucleus Logo"
                        className="relative"
                        width={520}
                        height={24}
                        priority
                    />
                    </div>
                </div>
              </Card>

              <Card className="w-[100%]">
                <CardHeader>
                    <CardTitle>A word from a young professional</CardTitle>
                    <CardDescription>The worst mistake you can make is to think Lesotho has no skills. If you think so, it&apos;s probably because you&apos;ve been spending too much time in your bedroom rather than networking. Go outside, and I swear you will be amazed.</CardDescription>
                </CardHeader>
                  <Image
                    src="/me2.jpg"
                    alt="Nucleus Logo"
                    width={855}
                    style={{
                      borderRadius:"0 0 8px 8px"
                    }}
                    height={24}
                    priority
                />
              </Card>

              <Card className="w-[100%]" id='storms'>
                <CardHeader>
                    <CardTitle>Solar Storms</CardTitle>
                    <CardDescription>Today, I&apos;ll be featured at Bokamoso FM radio, one of the topics ama touch on is how the next Solar storm is going affect our internet activities, what&apos;s crazy is, Nasa had predicted that this will happen in 2025, but it could actually happen this year. Imagine the whole wide world without the internet for weeks 😳. This not a science phenomenon or myth, it&apos;s highly possible</CardDescription>
                </CardHeader>
                <Image
                    src="/solarFlares.jpg"
                    alt="Nucleus Logo"
                    style={{
                      borderRadius:"0 0 8px 8px"
                    }}
                    width={855}
                    height={24}
                    priority
                />
              </Card>
              <div className='pb-5 flex justify-around'>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Heart color='gray'/>
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
                        <MessageCircle color='gray'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Comment</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Share2 color='gray' />
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
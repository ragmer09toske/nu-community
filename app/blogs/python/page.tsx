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
import { Box, Clipboard, GripHorizontal, Heart, HeartOff, MessageCircle, Send, Share2, YoutubeIcon } from 'lucide-react'
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
          title: "Text copied to clipboard",
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
    const linkToCopy = 'https://www.nucleusdevs.com/retsepile/pandas';
    copyToClipboard(linkToCopy);
  }
  const copy1 = () => {
    const linkToCopy = 'pip install pandas';
    copyToClipboard(linkToCopy);
  }

  const copy2 = () => {
    const linkToCopy = 'pip install jupyterlab';
    copyToClipboard(linkToCopy);
  }
  const copyExample = () => {
    const linkToCopy = 'Copy Example';
    copyToClipboard(linkToCopy);
  }
  const copy3 = () => {
    const linkToCopy = 'jupyter lab';
    copyToClipboard(linkToCopy);
  }
  const copy4 = () => {
    const linkToCopy = 'https://survey.stackoverflow.co/';
    copyToClipboard(linkToCopy);
  }

  return (
    <main>
      <div className='flex justify-center' style={{
      }}>
        <Navigation />
      </div>
      <div className='flex w-full  gap-3 justify-center lg:top-5  items-center lg:h-full h-[120%] fixed bottom-7'>
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
            <div className="flex pl-5 items-center gap-1">
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
            <div className='pl-10 pr-10'>
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
                <Card className="w-[100%] border-none" id='blogging'>
                  <CardHeader>
                    <CardTitle>Data Analysis With Python</CardTitle>
                    <p style={{color:"gray", fontSize: 12 }}>Jun 12, 2024</p>
                    <CardDescription>
                    <br/>
                    <h1><b>What is Pandas</b></h1>
                    <br/>
                    Pandas is an open-source Python library used for analyzing and manipulating data. It provides high-level data structures and various tools for working with structured data.
                    <br/>
                    What do I mean by <b>high-level data structures?</b>
                    <br/><br/>
                    By <b>high-level data structures</b>, I mean it offers powerful data containers that simplify complex data manipulation and representation.
                    <br/><br/>
                    These <b>data containers</b> include:

                    <ul>
                    <li><b>Series</b> (one-dimensional)</li>
                    <li><b>DataFrame</b> (two-dimensional) you know, rows & columns</li>
                    </ul>
                    <br/>
                    <b>To summarize Pandas, we can say</b>
                    <br/>
                    Pandas is synonymous with data analysis and data manipulation.
                    <br/><br/>
                    <b>For a symbolic summary</b>
                    <br/>
                    Pandas = Data Analysis + Data Manipulation

                    <br/><br/>
                    <b>So how do you get started wiht Pandas?</b>
                    <br/>
                    Firstly you must have python installed in your system!
                    <br/>
                    <br/>
                    Install JupyterLab
                    <br/>
                    <br/>
                    <Card className=" p-5 flex justify-between">
                    <div>
                      pip install jupyterlab
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                        <Clipboard onClick={copy2}/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copy</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </Card>
                    <br/>
                    <br/>
                    After installation, you can start JupyterLab by running:
                    <br/>
                    <br/>
                    <Card className=" p-5 flex justify-between">
                    <div>
                    jupyter lab
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                        <Clipboard onClick={copy3}/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copy</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </Card>
                    <br/>
                    <br/>
                    Install Pandas library using pip
                    <br/>
                    <br/>
                    <Card className=" p-5 flex justify-between">
                    <div>
                      pip install pandas
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                        <Clipboard onClick={copy1}/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copy</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </Card>
                    <br/>
                    <br/>
                    <div>
                      <h2 className="text-xl font-bold mb-4">Understanding &apos;import pandas as pd&apos; in Python</h2>
                      <ul className="list-disc pl-5">
                        <li className="mb-2">
                          <span className="font-bold">import:</span> A Python keyword used to import external modules or libraries.
                        </li>
                        <li className="mb-2">
                          <span className="font-bold">pandas:</span> The name of the library being imported.
                        </li>
                        <li className="mb-2">
                          <span className="font-bold">as pd:</span> An alias assigned to the Pandas library for shorthand reference.
                        </li>
                      </ul>
                      <p className="mt-4">
                        By importing Pandas in this manner, we can access its powerful functionality for data analysis and manipulation throughout our Python code.
                      </p>
                    </div>
                    <br/>
                    <br/>
                    <Image
                        src="/1.png"
                        alt="Nucleus Logo"
                        className="relative"
                        width={920}
                        height={24}
                        priority
                    />
                    <br/>
                    <br/>
                    <div className="">
                      <h2 className="text-xl font-bold mb-4">Now we need data to explore</h2>
                      <h2 className="text-xl font-bold mb-4">Instructions to Access Stack Overflow Survey Data</h2>
                      <ul className="list-disc pl-5">
                        <li className="mb-2">
                          <strong>Download the Data:</strong> Visit <a href="https://survey.stackoverflow.co/">https://survey.stackoverflow.co/</a> and download the most recent data.
                        </li>
                        <li className="mb-2">
                          <strong>Unzip the Downloaded File:</strong> Locate the downloaded file on your computer and unzip it to extract its contents.
                        </li>
                        <li className="mb-2">
                          <strong>Open Command Prompt (CMD):</strong> Press <code>Windows Key + R</code> to open the Run dialog. Type <code>cmd</code> and press Enter to open Command Prompt. Navigate to the directory where you unzipped the data using the <code>cd</code> command.
                        </li>
                        <li className="mb-2">
                          <strong>Open Jupyter Lab:</strong> Once you&apos;re in the directory containing the unzipped data, type <code>jupyter lab</code> in the Command Prompt. Press Enter to execute the command. This will launch Jupyter Lab in your default web browser.
                        </li>
                      </ul>
                    </div>
                    <Card className=" p-5 flex justify-between">
                    <div>
                    https://survey.stackoverflow.co/
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                        <Clipboard onClick={copy4}/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copy</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </Card>
                    <br/>
                    <br/>
                    <Image
                        src="/2.png"
                        alt="Nucleus Logo"
                        className="relative"
                        width={920}
                        height={24}
                        priority
                    />
                    <br/>
                    <br/>
                    <div className="">
                      <h2 className="text-xl font-bold mb-4">Reading CSV Data into Pandas DataFrame</h2>
                      <p className="mb-4">In this code snippet, we&apos;re using the Pandas library in Python to read data from a CSV file and store it in a DataFrame object. Here&apos;s a breakdown of the code:</p>
                      <ul className="list-disc pl-5">
                        <li className="mb-2">
                          <strong>df:</strong> This is the variable name we&apos;ve assigned to store the DataFrame object.
                        </li>
                        <li className="mb-2">
                          <strong>pd:</strong> This refers to the Pandas library, which we&apos;ve imported previously using the <code>import pandas as pd</code> statement.
                        </li>
                        <li className="mb-2">
                          <strong>read_csv(&quot;survey_results_public.csv&quot;):</strong> This function call reads the data from the CSV file named <code>survey_results_public.csv</code> and creates a DataFrame object from it.
                        </li>
                      </ul>
                      <p>This code is the first step in our data analysis process, as it allows us to load the survey data into a format that we can easily work with using Pandas.</p>
                    </div>
                    <br/>
                    <br/>
                    <Image
                        src="/3.png"
                        alt="Nucleus Logo"
                        className="relative"
                        width={920}
                        height={24}
                        priority
                    />
                    <br/>
                    <br/>
                    <div className="">
                      <h2 className="text-xl font-bold mb-4">Understanding the DataFrame Object</h2>
                      <p className="mb-4">In this code snippet, &quot;df&quot; refers to a DataFrame object, which is a fundamental data structure in the Pandas library. Here&apos;s a breakdown of its usage:</p>
                      <ul className="list-disc pl-5">
                        <li className="mb-2">
                          <strong>df:</strong> This is the variable name we&apos;ve assigned to store the DataFrame object.
                        </li>
                        <li className="mb-2">
                          <strong>DataFrame Object:</strong> It represents a two-dimensional tabular data structure with labeled axes (rows and columns), similar to a spreadsheet or SQL table.
                        </li>
                        <li className="mb-2">
                          <strong>Usage:</strong> Once data is loaded into a DataFrame, we can perform various operations such as data manipulation, analysis, filtering, and visualization.
                        </li>
                      </ul>
                    <br/>
                    <p>Run the Cell by: Pressing <b>Shift + Enter</b></p>
                    </div>
                    <br/>
                    <p>Then you will get a visual representation of your DataFrame.</p>
                    <br/>
                    <Image
                        src="/4.png"
                        alt="Nucleus Logo"
                        className="relative"
                        width={920}
                        height={24}
                        priority
                    />
                    <br/><br/>
                    I need you to take note that not all rows and columns are shown
                    <br/><br/>
                    <div className="">
                      <h2 className="text-xl font-bold mb-4">Understanding DataFrame Shape</h2>
                      <ul className="list-disc pl-5">
                        <li className="mb-2">
                          <b>df:</b> Refers to the DataFrame object containing your data.
                        </li>
                        <li className="mb-2">
                          <strong>shape:</strong> This attribute retrieves the dimensions of the DataFrame, representing the number of rows and columns.
                        </li>
                        <li className="mb-2">
                          <strong>Usage:</strong> By accessing <code>df.shape</code>, you can understand the total size of your dataset, which helps when not all rows and columns are displayed. It gives you an overview of the dataset&apos;s extent beyond what&apos;s visible on the screen.
                        </li>
                      </ul>
                      <p>Thus, the <code>df.shape</code> attribute complements the understanding that not all data may be immediately visible, providing insights into the dataset&apos;s overall dimensions.</p>
                    </div>
                    <br/>
                    <Image
                        src="/5.png"
                        alt="Nucleus Logo"
                        className="relative"
                        width={920}
                        height={24}
                        priority
                    />
                    <br/>
                    <p>89184 records(rows)</p>
                    <p>84 columns</p> 
                    <br/><br/>
                    <div className="">
                      <h2 className="text-xl font-bold mb-4">Setting Display Options in Pandas</h2>
                      <p className="mb-4">Because not all rows and columns are shown, we can adjust the display options in Pandas to control how data is presented. Here&apos;s how:</p>
                      <ul className="list-disc pl-5">
                        <li className="mb-2">
                          <strong>pd:</strong> Refers to the Pandas library we&apos;ve imported and aliased as <code>pd</code>.
                        </li>
                        <li className="mb-2">
                          <strong>set_option():</strong> This function is used to set display options in Pandas, allowing customization of how data is shown.
                        </li>
                        <li className="mb-2">
                          <strong>&apos;display.max_columns&apos;, 84:</strong> This call sets the maximum number of columns to display to 84.
                        </li>
                        <li className="mb-2">
                          <strong>&apos;display.max_rows&apos;, 84:</strong> This call sets the maximum number of rows to display to 84.
                        </li>
                        <li className="mb-2">
                          <strong>Usage:</strong> By adjusting display options with <code>pd.set_option()</code>, we can control the amount of data shown in our output, ensuring that more of the dataset is visible when needed.
                        </li>
                      </ul>
                    </div>
                    <br/>
                    <Image
                        src="/6.png"
                        alt="Nucleus Logo"
                        className="relative"
                        width={920}
                        height={24}
                        priority
                    />
                    <br/>
                    <div className="">
                      <h2 className="text-xl font-bold mb-4">Viewing the First Few Rows of the DataFrame</h2>
                      <p className="mb-4">Before the next step where we load the schema data into another DataFrame, we often preview the first few rows of the main DataFrame to get a sense of its structure and content. Here&apos;s how we do it:</p>
                      <ul className="list-disc pl-5">
                        <li className="mb-2">
                          <strong>df:</strong> Refers to the DataFrame object containing our main dataset.
                        </li>
                        <li className="mb-2">
                          <strong>head:</strong> This attribute retrieves the first few rows of the DataFrame, allowing us to quickly inspect its contents.
                        </li>
                        <li className="mb-2">
                          <strong>Usage:</strong> By accessing <code>df.head</code>, we can view a concise summary of the dataset, including the column names and a sample of the data values.
                        </li>
                      </ul>
                      <p>This initial inspection helps us understand the data structure and layout, guiding further analysis and preprocessing steps.</p>
                    </div>
                    <br/>
                    <Image
                        src="/7.png"
                        alt="Nucleus Logo"
                        className="relative"
                        width={920}
                        height={24}
                        priority
                    />
                    <br/>
                    <div className="">
                      <h2 className="text-xl font-bold mb-4">Viewing the First Ten Rows of the DataFrame</h2>
                      <p className="mb-4">In the next step of our data analysis process, we&apos;re specifically viewing the first ten rows of the main DataFrame to get a more detailed preview of its contents. Here&apos;s how we do it:</p>
                      <ul className="list-disc pl-5">
                        <li className="mb-2">
                          <strong>df:</strong> Refers to the DataFrame object containing our main dataset.
                        </li>
                        <li className="mb-2">
                          <strong>head(10):</strong> This attribute retrieves the first ten rows of the DataFrame, providing a more extensive overview compared to <code>df.head</code>.
                        </li>
                        <li className="mb-2">
                          <strong>Usage:</strong> By accessing <code>df.head(10)</code>, we can inspect a larger sample of the data, which can be beneficial for understanding patterns, trends, and outliers in the dataset.
                        </li>
                      </ul>
                    </div>
                    <br/>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Card className="w-[100%] p-0.5 pl-3 ">
                <div>
                    <CardHeader>
                        <CardTitle>Introduction to Nucleusdevs Academy</CardTitle>
                        <CardDescription>
                          <br/>
                          <h1><b>What is Nucleus Academy  </b></h1>
                          <br/>
                           Nucleus Academy is a dynamic platform dedicated to providing top-tier education and training in software 
                           development and related fields. Focused on continuous learning and technical growth, the Academy empowers 
                           users with essential skills to thrive in the ever-evolving tech landscape. With an emphasis on staying updated 
                           with industry trends, Nucleus Academy ensures that its learners are well-prepared to meet the demands of the modern
                           tech world.
                          <br/><br/>
                          <h2>What are our <b>goals?</b></h2>
                          <br/>
                          <b><h3>Goals:</h3> </b>  <br/>
                          <b>•	Skill Enhancement</b>
                            Nucleus Academy offers a wide range of carefully curated courses that cover various aspects of software development. These courses are designed to help learners at different stages of their careers, from beginners to advanced developers, sharpen their technical skills. 
                            Whether it&apos;s mastering programming languages, understanding software architecture, or delving into specialized areas like data science or AI, the Academy equips users with the knowledge needed to excel in today&apos;s competitive job market.
                            <br/><br/>
                          <b>•	Fostering Innovation & Creativity</b>
                            At Nucleus Academy, innovation is a core principle. By encouraging students to think outside the box, the Academy nurtures creativity and innovative problem-solving. 
                            Learners are given the tools to experiment with new ideas, build unique solutions, and challenge conventional approaches, fostering a mindset that is crucial for innovation in the tech industry.
                            <br/><br/>
                          <b>•	Lifelong Learning</b> 
                            The Academy provides continuous learning opportunities. Through a variety of workshops, seminars, and certification programs, Nucleus Academy supports the ongoing professional development of its users. 
                            These programs ensure that learners are always up to date with the latest advancements in technology and can continually expand their skill sets as they progress in their careers.
                            <br/><br/>
                          <b>• Hands-on Expertise</b>
                            Nucleus Academy doesn&apos;t just focus on theoretical knowledge; it emphasizes practical experience. Through hands-on workshops and projects, learners can apply the skills they&apos;ve acquired in real-world scenarios. 
                            The Academy provides access to industry-relevant tools and technologies, allowing students to gain valuable experience that directly translates to technical proficiency in the workplace.
                          <br/><br/>
                          <h4><b>Enrolment Advantages:</b></h4> 
                          <b>•	Comprehensive Learning Experience</b>
                            When you enrol in Nucleus Academy, you gain access to a broad range of learning materials, including detailed course content, interactive tutorials, and engaging workshops. These resources are developed by industry experts and are aligned with current trends and demands in the tech industry. 
                            This ensures that learners receive a well-rounded education that prepares them to meet the challenges of today&apos;s technological landscape.
                          <br/><br/>
                          <b>•	Career Progression</b>
                            Nucleus Academy offers valuable certifications upon the completion of courses. These certifications serve as a testament to the learners' technical competence and are highly regarded by employers in the tech industry. 
                            Earning these credentials not only enhances a learner&apos;s résumé but also opens doors to new career opportunities, promotions, and salary increases in their chosen field.
                          <br/><br/>
                          <b>•	Innovative Platform </b>
                            The Academy operates on a state-of-the-art learning platform that is designed to adapt and improve continuously. By incorporating user feedback, the academy, through its website evolves to meet the needs of its students, providing an optimized learning experience. 
                            This responsiveness ensures that course content and teaching strategies are always relevant, engaging, and effective, making the learning journey smoother and more impactful.
                          <br/><br/>
                        </CardDescription>
                    </CardHeader>
                    <div className="w-[100%] p-0.5 pl-3 flex justify-center">
                    <Image
                      src="/blog/intro.jpeg"
                      alt="Nucleus Logo"
                      className="relative"
                      width={520}
                      height={24}
                      priority
                    />
                    </div>
                </div>
              </Card> 
               <Card className="w-[100%] p-0.5 pl-3">
                <div>
                  <CardHeader>
                    <CardTitle>View some of our languages we offer</CardTitle>
                    <CardDescription>
                     
<p>
  In the ever-evolving tech landscape, certain programming languages consistently stand out as the most in-demand due to their widespread use, versatility, and relevance in solving modern computing problems. 
These languages are ranked highly because they meet critical industry needs, support diverse applications, and drive innovation across various sectors. By understanding why these languages top the list, you can better align your learning and career strategies with current market demands and technological trends.
Now, at the very top of our list we have: 
1.	PYTHON
Python is a favoured programming language due to its ease of use and versatility, capable of handling everything from simple scripts to complex web applications and AI. 
Its Django framework simplifies back-end development, while libraries like NumPy, SciPy, TensorFlow, and PyTorch enhance capabilities in scientific computing, data science, and machine learning. 
2.	JAVA
Java remains a top choice for learning this year due to its high-level, object-oriented design and platform independence. It’s essential for DevOps, virtual reality, big data, and mobile apps. Java’s versatility and strong security make it a favourite among over 97% of enterprises. 
3.	C & C++
At number three are C and C++. C, often called the 'mother of all programming languages,' remains crucial for operating systems, compilers, and databases. It’s a versatile, high-performance language ideal for games, graphics, and enterprise applications.
C++, an extension of C with object-oriented capabilities, excels in performance-intensive areas like game development, web applications, and software requiring fast rendering. While its demand is growing more slowly, C++ skills are essential for maintaining and developing high-performance applications.
Both C and C++ are fundamental for performance-critical apps and serve as a base for learning more advanced languages.
4.	JAVASCRIPT
Next up is JavaScript, renowned for its versatility. It enhances productivity and readability with a well-organized codebase, platform independence, and extensive browser control. 
Essential for front-end development alongside HTML and CSS, JavaScript also powers server-side applications through Node.js, supporting various operating systems like Linux and Windows. JavaScript enables the creation of dynamic content, interactive features, and animated graphics on websites. 
Its importance is underscored by its dominance in Stack Overflow’s 2022 Developer Survey as the most popular language for the tenth consecutive year.
5.	TYPESCRIPT
Released by Microsoft in 2012, TypeScript is a 'typed' superset of JavaScript that adds robust features to the popular language. Described as "all of JavaScript, plus a bit more," TypeScript has surged in popularity, ranking 4th in GitHub’s 2022 language rankings with a staggering 392% growth in demand.
This open-source, object-oriented language enhances JavaScript with advanced features like type-checks, scalability, and code maintainability, making it a powerful tool for large projects.
fast-paced world of technology, proficiency in top programming languages—can greatly boost your career. These languages are renowned for their broad applicability, performance, and critical roles in various tech fields, from web development to system-level programming. 
By understanding their unique features and uses, you can better align your skills with current industry demands and emerging trends. Mastering these languages will not only enhance your marketability but also position you at the forefront of technological advancements.
</p>

                    </CardDescription>
                  </CardHeader>

                </div>
               </Card>
            </ScrollArea>
          </Command>
      </div>
      </Card>
    </div>
    </main>
  )
}
export default Retsepile  
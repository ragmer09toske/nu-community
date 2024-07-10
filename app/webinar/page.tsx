"use client"
import React, { useEffect, useState } from 'react'
import RegisterForm from './RegisterForm'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { WebinarContext } from './AppContex'
import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'
import { WebinarFooter } from './Footer'
import useMobile from '../Mobile'
import WebinarDesktop from './register/page'
import { Button, Dialog, DialogPanel } from '@tremor/react';
import Link from 'next/link'
import { Facebook, Github, Instagram, LinkedinIcon } from 'lucide-react'
import Navbar_Codiac from '@/components/CodiacNav'
import Navbar_Data_Repo from '@/components/Navbar_Data_One_Repo'
import { Spotlight } from '@/components/Spotlight'
import { cn } from '../utils/cn'
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/navbar-menu';

interface User {
  _id: string;
  name: string;
  number: number;
  email: string;
  password: string;
  __v: number;
}

const Home = () => {
  const [formType, setFormType] = useState<string>("initials")
  const [jobStatus, setJobStatus] = useState<string>('');
  const [firstname, setFirstName] = useState<string>("")
  const [lastname, setLastname] = useState<string>("")
  const [number, setNumber] = useState<number>()
  const [email, setEmail] = useState<string>("")
  const { toast } = useToast()
  const [loading, setLoading] = useState<boolean>(false)
  const [about, setAbout] = useState<string>("")
  const [githubValue, setgithubValue] = useState([0])
  const [reactValue, setReactValue] = useState([0])
  const [htmlValue, setHtmlValue] = useState([0])
  const [FacebookProfile, setFacebookProfile] = useState<string>("")
  const [LinkInProfile, setLinkInProfile] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)

  const isMobile = useMobile()

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const response = await axios.post(
        'https://nu-com-0e51cf02b2c8.herokuapp.com/webinar/register',
        {
          firstname,
          lastname,
          number,
          email,
          about,
          jobStatus,
          githubValue,
          reactValue,
          htmlValue,
          FacebookProfile,
          LinkInProfile,
        }
      )

      setIsOpen(true)
      console.log(response.data)
      setLoading(false)
    } catch (error: any) {
      console.log('Error:', error.message)
      toast({
        title: "Registration failed",
        description: "Try to register again",
      })
      setLoading(false)
    }
  }

  const handleRegister = () => {
    handleSubmit()
  }

  return (
    <>
      {isMobile && (
        <div className="relative">
          <div className="p-3 fixed top-0 z-50">
            <Image
              src="/webinarBanner.png"
              alt="Nucleus Logo"
              className="relative"
              width={920}
              height={24}
              priority
              style={{
                borderRadius: "8px 8px 8px 8px",
              }}
            />
          </div>
          <div
            className="fixed top-0 w-full h-10"
            style={{ backdropFilter: "blur(14px)" }}
          ></div>
        </div>
      )}
      <div className="lg:w-[70%] m-auto">
        <WebinarContext.Provider
          value={{
            handleRegister,
            loading,
            setLoading,
            formType,
            setFormType,
            firstname,
            setFirstName,
            jobStatus,
            setJobStatus,
            lastname,
            setLastname,
            number,
            setNumber,
            email,
            setEmail,
            about,
            setAbout,
            githubValue,
            setgithubValue,
            reactValue,
            setReactValue,
            htmlValue,
            setHtmlValue,
            FacebookProfile,
            setFacebookProfile,
            LinkInProfile,
            setLinkInProfile,
            isOpen,
            setIsOpen,
          }}
        >
          {isMobile ? (
            <div className="w-full m-auto mt-5 p-5">
              <Card className="mt-36">
                <div className="h-full">
                  <div className="flex justify-center">
                    <Dialog
                      open={isOpen}
                      onClose={() => setIsOpen(false)}
                      static={true}
                      className="z-[100]"
                    >
                      <DialogPanel className="max-w-lg">
                        <div className='flex justify-center'>
                          Succefully Registered<br/>
                        </div>
                        <div className='flex justify-center pb-5'>
                          {firstname} ✅
                        </div>
                        <Button
                          variant="secondary"
                          className="mx-auto flex items-center"
                          onClick={() => setIsOpen(false)}
                        >
                          Done
                        </Button>
                        <div className='flex justify-center pt-5'>
                          Follow us on socials
                        </div>
                        <div className="flex z-50 justify-center gap-5 p-5">
                          <div className="social-icons">
                              <Link
                              href="https://www.linkedin.com/in/nucleus-devs-5295a7262/"
                              style={{ color: "white" }}
                              target="_blank" 
                              rel="nucleus devs"
                              >
                              <LinkedinIcon />
                              </Link>
                          </div>
                          <div className="social-icons">
                              <Link href="https://web.facebook.com/nucleusdevs.09"
                              style={{ color: "white" }}
                              target="_blank" 
                              rel="nucleus devs"
                              >
                              <Facebook />
                              </Link>
                          </div>
                          <div>
                              <Link
                              href="https://github.com/ragmer09toske"
                              style={{ color: "white" }}
                              target="_blank" 
                              rel="nucleus devs"
                              >
                              <Github />
                              </Link>
                          </div>
                          <div className="social-icons">
                              <Link
                              href="https://www.instagram.com/nucleus_creative_studio/"
                              style={{ color: "white" }}
                              target="_blank" 
                              rel="nucleus devs"
                              >
                              <Instagram />
                              </Link>
                          </div>
                        </div>
                       
                      </DialogPanel>
                    </Dialog>
                  </div>
                  <RegisterForm />
                </div>
              </Card>
              <div className="w-full">
                <WebinarFooter />
              </div>
            </div>
          ) : (
            <>
              <Navbar_Codiac />
              <div className="relative w-full flex items-center justify-center">
                <Navbar className="top-2 z-50" />
              </div>
              <div className='-mt-24'>
                <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="white"
                />
                <WebinarDesktop />
              </div>
            </>
          )}
        </WebinarContext.Provider>
      </div>
    </>
  )
}
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
    // Use the useState hook with the User type
const [user, setUser] = useState<User | null>(null);

useEffect(() => {
  // Retrieve the JSON string from localStorage
  const userString = localStorage.getItem("user");

  if (userString) {
    // Parse the JSON string to get the original object and set it as the user
    const user: User = JSON.parse(userString);
    setUser(user);
  }
}, []); 

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">{user?.name}</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default Home
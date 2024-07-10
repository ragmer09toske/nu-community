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
              <Navbar_Data_Repo />
              <div className='-mt-16'>
                <WebinarDesktop />
              </div>
            </>
          )}
        </WebinarContext.Provider>
      </div>
    </>
  )
}

export default Home
"use client"
import React, { useState } from 'react'
import RegisterForm from './RegisterForm'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { WebinarContext } from './AppContex'
import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'

const Home = () => {
  const [formType, setFormType] = useState<string>("initials")
  const [jobStatus, setJobStatus] = useState<string>('');
  const [firstname, setFirstName] = useState<string>("")
  const [lastname, setLastname] = useState<string>("")
  const [number,setNumber] = useState<number>()
  const [email,setEmail] = useState<string>("")
  const { toast } = useToast()
  const [loading, setLoading] = useState<boolean>(false)
  const [about, setAbout] = useState<string>("")
  const [githubValue, setgithubValue] = useState([0]); 
  const [reactValue, setReactValue] = useState([0]); 
  const [htmlValue, setHtmlValue] = useState([0]); 
  const [FacebookProfile, setFacebookProfile]=useState<string>("")
  const [LinkInProfile, setLinkInProfile]=useState<string>("")


  const handleSubmit = async () => {
    try {
      setLoading(true)
      const response = await axios.post(
        'https://nu-com-0e51cf02b2c8.herokuapp.com/webinar/register',
        {
          firstname: firstname,
          lastname : lastname,
          number: number,
          email : email,
          about : about,
          jobStatus : jobStatus,
          githubValue : githubValue,
          reactValue : reactValue,
          htmlValue : htmlValue,
          FacebookProfile : FacebookProfile,
          LinkInProfile : LinkInProfile,
        }
      );

      toast({
        title: "Registration succeeded",
        description: "You will get an email for your RSV",
      })

      console.log(response.data)

      setLoading(false)
    } catch (error: any) {
      console.log('Error:', error.message);
      toast({
        title: "Registration failed",
        description: "try to register again",
      })
      setLoading(false)
    }
  };

  const handleRegister = () => {
    handleSubmit();
  }
  return (
    <>
    <div className='relative' >
        <div className='p-3 fixed top-0 z-50'>
            <Image
                src="/webinarBanner.png"
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
    </div>
    <div className='p-5'>
      <WebinarContext.Provider value={{
        setFormType, 
        setJobStatus, 
        setFirstName, 
        setLastname,
        setNumber,
        setEmail,
        setAbout,
        setLoading,
        handleRegister,
        loading, 
        formType, 
        firstname, 
        jobStatus, 
        lastname, 
        number,
        email,
        about, 
        githubValue, setgithubValue,
        reactValue, setReactValue,
        htmlValue, setHtmlValue,
        FacebookProfile, setFacebookProfile,
        LinkInProfile, setLinkInProfile,
      }}>
        <Card className='p-2 mt-36'>
            <div className='h-full'>
                <RegisterForm />
            </div>
        </Card>
      </WebinarContext.Provider>
    </div>
    </>
  )
}

export default Home
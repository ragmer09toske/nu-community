import React, { useContext } from 'react'
import { Spotlight } from './Spotlight'
import { PriceContext } from '@/app/academy/AppContex'

const Header = () => {
  return (
    <div className="header">
      <h1 className="text-2xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Professional Training <br/>for Software Engineers 
      </h1>
      <p className="max-w-2xl text-gray-500 dark:text-white text-center md:mx-auto mx-4 mt-4 text-sm md:text-lg ">
        Enroll now for exclusive mentorship and enjoy one year of updates, including all new releases. Stay ahead with continuous improvements and new features designed to enhance your learning journey
      </p>
    </div>
  )
}

const Step = ({ text }:{text:any}) => {
  return (
    <div className="flex flex-row items-start space-x-2 my-4 justify-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        // class="bi bi-check2-circle"
        viewBox="0 0 16 16"
        className="h-4 w-4 text-green-500 mt-1"
      >
        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
      </svg>
      <p className="text-gray-600 dark:text-white">{text}</p>
    </div>
  )
}

const MarketingPricing = () => {
  let {setIsOpenOnlinePresence} = useContext(PriceContext);
  const OnlinePresence = () => {
    setIsOpenOnlinePresence(true)
  }
  return (
    <>
      <div className="relative z-10">
        <div
          className="relative z-10 card flex flex-col mx-auto rounded-lg shadow-md p-4 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-700"
          style={{ zIndex: 20 }}
        >
          <h2 className="text-xl text-gray-800 dark:text-white font-bold text-center my-4">
            Online Presence
          </h2>
          <p className="price text-gray-800 font-extrabold text-8xl mt-4 dark:text-white flex items-center justify-center my-4">
            <span className="text-4xl">M</span>450
          </p>
          <div className="features">
            <Step text="Your Online Business Analysis" />
            <Step text="Website Performance Audit" />
            <Step text="Social Media Effectiveness Review" />
            <Step text="Content Strategy Assessment" />
            <Step text="Online Reputation Management" />
            <Step text="SEO and SEM Analysis" />
            <Step text="Brand Consistency Check" />
          </div>
            <button className="w-full rounded-md py-4 font-semibold bg-tmk-blue mt-4 text-white" onClick={OnlinePresence}>
            Register 
            </button>
        </div>
        <div
          className="absolute inset-0 transform -rotate-3 opacity-20 rounded-md  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          style={{ zIndex: -20 }}
        ></div>
      </div>
    </>
  )
}

const MarketingApplicationFunctionalPricing = () => {
  let {setIsOpenUnderTheHoodStudies} = useContext(PriceContext);
  const UnderTheHoodStudies = () => {
    setIsOpenUnderTheHoodStudies(true)
  }
  return (
    <>
      <div className="relative z-10">
        <div
          className="relative z-10 card flex flex-col mx-auto rounded-lg shadow-md p-4 bg-white dark:bg-gray-700 border-2 border-tmk-blue dark:border-gray-700"
          style={{ zIndex: 20 }}
        >
          <h2 className="text-xl text-gray-800 dark:text-white font-bold text-center my-6">
            Under The Hood Studies
          </h2>
          <p className="price text-gray-800 font-extrabold text-8xl mt-4 dark:text-white flex items-center justify-center my-4">
            <span className="text-4xl">M</span>750
          </p>
          <div className="features mx-auto">
            <Step text="How React Works Under the Hood" />
            <Step text="Transition to Next.js" />
            <Step text="API Design and Development" />
            <Step text="Database Design" />
            <Step text="UX/UI Principles" />
            <Step text="Learn Figma" />
            <Step text="Become Part of the Programming Wars" />
            <Step text="Data Structures and Algorithms" />
            <Step text="Progressive Web Apps (PWAs)" />
            <Step text="Web Security Best Practices" />
            <Step text="DevOps for Developers" />
            {/* <Step text="New Monthly Components" /> */}
          </div>
            <button className="w-full rounded-md py-4 font-semibold bg-tmk-blue mt-4 text-white" onClick={UnderTheHoodStudies}>
            Register
            </button>
        </div>
      </div>
    </>
  )
}

const ApplicationPricing = () => {
  let {setIsOpenFullstackMentorship} = useContext(PriceContext);
  const FullstackMentorship = () => {
    setIsOpenFullstackMentorship(true)
  }
  return (
    <>
      <div className="relative z-10">
        <div
          className="relative z-10 card flex flex-col mx-auto rounded-lg shadow-md p-4 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-700"
          style={{ zIndex: 20 }}
        >
          <h2 className="text-xl text-gray-800 dark:text-white font-bold text-center my-4">
            Fullstack Mentorship
          </h2>
          <p className="price text-gray-800 font-extrabold text-8xl mt-4 dark:text-white flex items-center justify-center my-4">
            <span className="text-4xl">M</span>350
          </p>
          <div className="features">
            <Step text="Free Wifi" />
            <Step text="8am to 4pm access to our CBD Office" />
            <Step text="Webinar Sessions" />
            <Step text="Free Consultations" />
          </div>
            <button className="w-full rounded-md py-4 font-semibold bg-tmk-blue mt-4 text-white" onClick={FullstackMentorship}>Register</button>
        </div>
        <div
          className="absolute inset-0 transform -rotate-3 opacity-20 rounded-md  bg-gradient-to-r from-yellow-200 via-green-200 to-green-500"
          style={{ zIndex: -20 }}
        ></div>
      </div>
    </>
  )
}

export default function PricingComponent() {
  return (
    <div className='pb-10'>
      <div className="page-container pt-28">
        <Header />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 mx-4 md:mx-8 xl:mx-40 gap-8 z-10 content-center items-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <MarketingPricing />
        <MarketingApplicationFunctionalPricing />
        <ApplicationPricing />
      </div>
    </div>
  )
}
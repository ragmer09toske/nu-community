"use client"

import { ArrowBigRight, Rocket } from "lucide-react"
import { GlobeDemo } from "./Gobe"
import Link from "next/link"
import { Button } from "./moving-border"

export default function Home_Data_One_Repo() {

    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-slate-500 to-slate-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
            <div className='relative'>
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                        <div className='flex-none space-y-5 max-w-xl'>
                            <h1 className="text-5xl text-white font-extrabold sm:text-7xl">
                               Welcome home <span className="text-purple-300">we been been!</span> Expecting you
                            </h1>
                            <p>
                                Your journey of awesomeness began the minute you allowed us to pilot your business or career into a commanding online presence. Thank you for entrusting us with such a responsibility.
                            </p>
                            <div className='flex items-center gap-x-4 sm:text-sm'>
                                <Button
                                    borderRadius="1.75rem"
                                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                >
                                    <Link href="/codiac">
                                        Codiac <Rocket className="inline"/> 
                                    </Link>
                                </Button>
                               <Button variant="ghost">
                                <Link href="#">
                                    Creative Cloud <ArrowBigRight className="inline" />
                                </Link>
                               </Button>
                            </div>
                        </div>
                        <div className='flex-1 hidden md:block'>
                            {/* Replace with your image */}
                            <GlobeDemo />
                        </div>
                    </div>
                </section>
            </div>
            
            
        </div>
    )
}

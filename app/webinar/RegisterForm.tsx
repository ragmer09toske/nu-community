"use client";
import React, { useState } from "react";
import { cn } from "@/app/utils/cn";



const  RegisterForm = () => {
  
  const [loading, setLoading] = React.useState<boolean>(false)
  const [formType, setFormType] = useState<string>("initials")

    
    const Container = ({
      className,
      children,
    }: {
      className?: string;
      children: React.ReactNode;
    }) => {
      return (
        <div
          className={cn(
            `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
        shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
        `,
            className
          )}
        >
          {children}
        </div>
      );
    };
    const [jobStatus, setJobStatus] = useState<string>('');
    const handleSelectChange = (value:any) => {
      setJobStatus(value);
    };

    
    const handleToSocials = () => {
      setFormType("socialmedia")
    }
    
    
  return (
    <div className="h-full">
      {/* {formType==="initials" && <InitialsForm />} */}
      {/* {formType==="background" && <BackgroundForm />} */}
      {/* {formType==="socialmedia" && <SocialmediaProfiles />} */}
    </div>
  );
}


export default RegisterForm
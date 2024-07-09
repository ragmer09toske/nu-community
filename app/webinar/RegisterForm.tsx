"use client";
import React, { useContext, useState } from "react";
import { cn } from "@/app/utils/cn";
import InitialsForm from "./Initials";
import BackgroundForm from "./Background";
import SocialmediaProfiles from "./Socials";
import { WebinarContext } from "./AppContex";

const  RegisterForm = () => {
  let {formType} = useContext(WebinarContext);
  return (
    <div className="pt-2">
        <h1 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Nucleus<br /> Codiac Webinar
      </h1>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="px-5">
          {formType==="initials" && <InitialsForm />}
          {formType==="background" && <BackgroundForm />}
          {formType==="socialmedia" && <SocialmediaProfiles />}
      </div>
    </div>
  );
}


export default RegisterForm
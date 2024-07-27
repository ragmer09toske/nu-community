"use client";
import React, { useContext, useState } from "react";
import InitialsForm from "./Initials";
import BackgroundForm from "./Background";
import SocialmediaProfiles from "./Socials";
import { WebinarContext } from "./AppContex";
import { Card } from "@/components/ui/card";
import useMobile from "../Mobile";

const  RegisterForm = () => {
  let {formType} = useContext(WebinarContext);
  const isMobile = useMobile();

  return (
    <div className="pt-2">
        <h1 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Nucleus<br /> Codiac Webinar
      </h1>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      {isMobile ?
        <div className="px-5 lg:p-5">
          {formType==="initials" && <InitialsForm />}
          {formType==="background" && <BackgroundForm />}
          {formType==="socialmedia" && <SocialmediaProfiles />}
      </div>:
      <Card className="px-5 lg:p-5">
        {formType==="initials" && <InitialsForm />}
        {formType==="background" && <BackgroundForm />}
        {formType==="socialmedia" && <SocialmediaProfiles />}
      </Card>
      }
    </div>
  );
}


export default RegisterForm
"use client";
import React, { useState } from "react";
import { cn } from "@/app/utils/cn";
import InitialsForm from "./Initials";
import BackgroundForm from "./Background";
import SocialmediaProfiles from "./Socials";

const  RegisterForm = () => {
  
  const [formType, setFormType] = useState<string>("initials")
  const handleToSocials = () => {
    setFormType("socialmedia")
  }
  return (
    <div className="h-full">
      {formType==="initials" && <InitialsForm />}
      {formType==="background" && <BackgroundForm />}
      {formType==="socialmedia" && <SocialmediaProfiles />}
    </div>
  );
}


export default RegisterForm
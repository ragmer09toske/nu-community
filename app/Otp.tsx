import React, { useEffect, useState } from 'react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth"
import { app } from "./config"
import { useRouter } from 'next/router'

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}
const Opt = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp,setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [optDent, setOtpSend] =useState(false);

  const auth = getAuth(app);
  const route = useRouter();

  useEffect(()=>{
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recapcha-container",{
      "size": "normal",
      "callback": (response:any) => {

      },
      'expired-callback': () => {

      }
    })
  },[auth])

  const handlePhoneNumberChange = (e:any) => {
    setPhoneNumber(e.target.value);
  }

  const handlesendOpt = async () => {
    try {
      const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, '')}`;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      setOtpSend(true);
      setPhoneNumber('');
      alert("OTP has been sent");
    }
    catch {

    }
  }
  return (
    <div>
        
    </div>
  )
}

export default Opt
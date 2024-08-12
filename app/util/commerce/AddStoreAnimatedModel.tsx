"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/animated-modal";
import { Loader2, User2 } from "lucide-react";
// import { CreateUserForm } from "./CreateUserForm";
import { NuUserContext, StoreContext } from "@/app/academy/AppContex";
import axios from "axios";
import { CreateUserForm } from "../components/CreateUserForm";
import { AddStoreForm } from "./AddStoreForm";

export function AddStoreAnimatedModel() {
    // State variables for store attributes
    const [name, setName] = useState<string>(''); // Store name
    const [description, setDescription] = useState<string>(''); // Store description
    const [officeNumber, setOfficeNumber] = useState<string>(''); // Office number
    const [whatsappLink, setWhatsappLink] = useState<string>(''); // WhatsApp link
    const [facebookLink, setFacebookLink] = useState<string>(''); // Facebook link
    const [logo, setLogo] = useState<string>(''); // Logo URL
    const [avatar, setAvatar] = useState<string>(''); // Avatar URL

    // Optional state for loading or other purposes
    const [loading, setLoading] = useState<boolean>(false); // Loading state
    async function register() {
        try {
            setLoading(true);
    
            // Send a POST request to create a new store
            const response = await axios.post('https://nu-com-0e51cf02b2c8.herokuapp.com/nu-commerce/store', {
                name: name,                  // Store name
                description: description,    // Store description
                office_number: officeNumber, // Store office number
                whatsapp_link: whatsappLink,// Store WhatsApp link
                facebook_link: facebookLink,// Store Facebook link
                logo: logo,                  // Store logo URL
                avatar: avatar               // Store avatar URL
            });
    
            setLoading(false);
    
            // Handle successful response
            const { data } = response; // Adjust this based on your API response
            console.log('Store created successfully:', data);
            // You may want to handle further actions such as redirecting or displaying a success message
    
        } catch (error) {
            setLoading(false);
    
            // Handle error
            if (axios.isAxiosError(error)) {
                // If the error is from Axios, you can handle it specifically
                console.error('An error occurred:', error.message);
                // Optionally set an error state or show an error message to the user
            } else if (error instanceof Error) {
                // General error handling
                console.error('An unexpected error occurred:', error.message);
                // Optionally set an error state or show an error message to the user
            } else {
                // Handle unexpected error types
                console.error('An unknown error occurred');
            }
        }
    }
    const submit = () =>{
        register()
    }
  return (
    <StoreContext.Provider value={{
        name, setName,
        description, setDescription,
        officeNumber, setOfficeNumber,
        whatsappLink, setWhatsappLink,
        facebookLink, setFacebookLink,
        logo, setLogo,
        avatar, setAvatar
      }}>
        <div className=" flex items-center justify-center w-screen">
        <Modal >
            <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                Add Store
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
                <User2 /> {" "} +
            </div>
            </ModalTrigger>
            <ModalBody>
            <ModalContent >
              <AddStoreForm />
            </ModalContent>
            <ModalFooter className="gap-4">
                <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Cancel
                </button>
                <button onClick={submit} className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                    {!loading ? "Save Store" : <Loader2 className="animate-spin flex w-full justify-center "/>}
                </button>
            </ModalFooter>
            </ModalBody>
        </Modal>
        </div>
    </StoreContext.Provider>
  );
}

const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

const VacationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
    </svg>
  );
};

const ElevatorIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M10 10l2 -2l2 2" />
      <path d="M10 14l2 2l2 -2" />
    </svg>
  );
};

const FoodIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  );
};

const MicIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
      <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
    </svg>
  );
};

const ParachuteIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12a10 10 0 1 0 -20 0" />
      <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
      <path d="M2 12l10 10l-3.5 -10" />
      <path d="M15.5 12l-3.5 10l10 -10" />
    </svg>
  );
};

import React from "react";
import RegisterDialog from "../pricing/RegisterDialog";
import { LoginDialog, SignupForm } from "@/components/login";
import Register from "../register/page";

const SideMenu = () => {
  const [isLoading, setLoading] = React.useState(false);
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gradient-to-tr from-black to-[#0d011e83] text-white p-1 rounded-lg shadow-[20px_0_80px_20px_rgba(255,255,255,0.15)] min-h-[70%] min-w-[30%]">
      <div>
        <div className="p-5">
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"></p>
        </div>
      </div>
      <div className="gap-5">
        <Register />
      </div>
    </div>
  );
};

export default SideMenu;

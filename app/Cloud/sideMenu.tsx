import React from "react";
import RegisterDialog from "../pricing/RegisterDialog";
import { LoginDialog, SignupForm } from "@/components/login";

const SideMenu = () => {
  const [isLoading, setLoading] = React.useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gradient-to-tr from-black to-[#1f022bee] text-white p-4 rounded-lg shadow-[20px_0_80px_20px_rgba(188,19,254,0.15)] min-h-[70%] min-w-[30%]">
      {/* sideMenu */}
      {/* <LoginDialog /> */}
      <div>
        <div className="p-5">
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"></p>
        </div>
      </div>
      <div className="gap-5">
        <SignupForm setLoading={setLoading} />
      </div>
    </div>
  );
};

export default SideMenu;

"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormComponent from "./auth/FormComponent";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";

const Navbar = () => {
  
  
  const { data: user, status } = useSession();
  console.log(user)
  

  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightStyle, setHighlightStyle] = useState({});
  const navRef = useRef<HTMLDivElement>(null);
  const [isRegister, setIsRegister] = useState(false);
  const [open, setOpen] = useState(false);



   

  const handleSignInComplete = () => {
    setOpen(false);
  };
  const handleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <nav className="font-poppin fixed top-0 left-0 right-0 z-50 bg-black flex items-center justify-between text-white shadow h-[4rem] px-6 text-sm">
      <div className="flex items-center gap-1">
       <Link href={'/'}>
       <Image
          src="/citi-logo.png"
          alt="Logo"
          width={50}
          height={60}
          className="mr-3"
        /></Link>
        
      {/* </div> */}
        {/* <div className="flex space-x-4 items-center"> */}
           {/* <div>Home</div> */}
           <Link href='/market/my-portfolio' className="hover:bg-white/20 px-3 py-2 rounded transition duration-300 ease-in-out">Market</Link>
           <div className="hover:bg-white/20 px-3 py-2 rounded transition duration-300 ease-in-out cursor-pointer">Courses</div>
           <Link href='/activity' className="hover:bg-white/20 px-3 py-2 rounded transition duration-300 ease-in-out cursor-pointer">Activity</Link>           
           <div className="hover:bg-white/20 px-3 py-2 rounded transition duration-300 ease-in-out cursor-pointer">Portfolio</div>         
        </div>
      <div className="flex space-x-3 items-center">
        <div className="hover:bg-white/20 px-3 py-2 rounded transition duration-300 ease-in-out cursor-pointer">Careers</div>
        <Link href = '/news' className="hover:bg-white/20 px-3 py-2 rounded transition duration-300 ease-in-out cursor-pointer">News</Link>
        <Link href='/about' className="hover:bg-white/20 px-3 py-2 rounded transition duration-300 ease-in-out cursor-pointer">About us</Link>
        
        {!user ? (
          <div className="flex gap-6">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger
                onClick={() => setIsRegister(false)}
                className=" transition-all duration-300 ease-in-out rounded-full "
              >
                Login
              </DialogTrigger>
              <DialogTrigger
                onClick={() => setIsRegister(true)}
                className="  transition-all duration-300 ease-in-out rounded-full   "
              >
                Signup
              </DialogTrigger>
              <DialogContent className=" w-full sm:w-[400px] ">
                <DialogHeader>
                  <DialogDescription>
                    <FormComponent
                      isRegister={isRegister}
                      setIsRegister={setIsRegister}
                      handleRegister={handleRegister}
                      onSignInComplete={handleSignInComplete}
                    />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="hover:bg-white/20 px-3 py-2 rounded transition duration-300 ease-in-out cursor-pointer">
                Dashboard
            </div>
                <div className="w-9 h-9 rounded-full flex justify-center items-center bg-slate-200 text-gray-800">{user?.user?.name?.charAt(0)?.toUpperCase()}</div>

            {/* <form>
              <div className="bg-white text-black">
                Logout
              </div>
            </form> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

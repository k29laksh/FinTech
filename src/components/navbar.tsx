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
import { getSession } from "@/action/user";
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

  const mainNavItems = ["Home", "Explore Us", "About Us", "Contact Us"];

  useEffect(() => {
    const updateHighlight = () => {
      
      if (navRef.current) {
        const navItem = navRef.current.children[activeIndex] as HTMLElement;
        setHighlightStyle({
          width: `${navItem.offsetWidth}px`,
          transform: `translateX(${navItem.offsetLeft}px)`,
        });
      }
    };

    updateHighlight();
    window.addEventListener("resize", updateHighlight);
    return () => window.removeEventListener("resize", updateHighlight);
  }, [activeIndex]);

  const handleSignInComplete = () => {
    setOpen(false);
  };
  const handleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <nav className="font-poppin  bg-black flex items-center justify-between text-white shadow h-[4rem] px-6">
      <div className="flex items-center gap-6">
        <Image
          src="/citi-logo.png"
          alt="Logo"
          width={60}
          height={60}
          className=""
        />
      </div>
        <div className="flex space-x-6 items-center ">
           <div>Home</div>
           <div>Market</div>
           <div>Courses</div>
           <div>Activity</div>
           
           <div>Portfolio</div>
         
        </div>
      <div className="flex space-x-6 ">
        {!user ? (
          <>
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
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <div >
                Dashboard
            </div>
            <div className="flex items-center space-x-2">
                <div>{user?.user?.name}</div>
                <div className="w-9 h-9 rounded-full flex justify-center items-center bg-slate-200 text-gray-800">{user?.user?.name?.charAt(0)?.toUpperCase()}</div>
            </div>

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

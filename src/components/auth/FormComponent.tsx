"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { signIn, getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { login, signup } from "@/action/user";
import { useFormStatus } from "react-dom";

const FormComponent = ({ isRegister,setIsRegister, onSignInComplete,handleRegister }) => {
  const { pending } = useFormStatus();

  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSession();
        setUser(session?.user);
        if (session?.user) {
          onSignInComplete(); // Close the dialog after sign-in
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchSession();
  }, [router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const action = isRegister ? signup : login;

    try {
      await action(formData);
      if (isRegister) {
        toast.success("Account created successfully! Please log in.");
        setIsRegister(false)
      } else {
        toast.success("Logged in successfully!");
        onSignInComplete(); // Close the dialog after successful login
      }
      router.refresh();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn("google");
      router.refresh();
    } catch (error) {
      toast.error("Google login failed!");
      console.log(error);
    }
  };

  return (
    <div className="mt-6 w-full mx-auto rounded-none md:rounded px-2 md:px-4 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-center text-3xl text-neutral-800 dark:text-neutral-200">
        {isRegister ? "Sign Up" : "Sign In"}
      </h2>
      <form className="mt-6 mb-4 flex flex-col gap-3" onSubmit={handleSubmit}>
        {isRegister && (
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Name"
              type="text"
              name="name"
              className="mt-1"
            />
          </div>
        )}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Email"
            type="email"
            name="email"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Password"
            type="password"
            name="password"
            className="mt-1 mb-6"
          />
          {!isRegister && (
            <p className="text-right text-neutral-600 text-sm max-w-sm dark:text-neutral-300">
              <Link href="/forgotpassword">Forgot Password</Link>
            </p>
          )}
        </div>
        <button
          disabled={pending}
          className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-neutral-800 to-gray-800 dark:hover:bg-gradient-to-br dark:hover:from-zinc-800 dark:hover:to-neutral-700 hover:to-gray-700  text-white py-2 md:py-2 px-4 md:px-4 rounded"
          type="submit"
        >
          {isRegister ? "Create Account" : "Sign in"}
        </button>
      </form>

      <button
        className="py-2 px-4 border-2 border-neutral-200 dark:border-neutral-700 rounded w-full flex justify-center items-center bg-gradient-to-br from-white dark:from-neutral-800 dark:to-neutral-800 to-neutral-200 dark:hover:bg-gradient-to-br dark:hover:from-zinc-700 dark:hover:to-neutral-700 hover:to-neutral-300 hover:from-neutral-50 transition-all ease-in-out duration-200 shadow-input"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="mr-2 text-2xl" />
        <span className="text-neutral-700 dark:text-neutral-200">
          {isRegister ? "Sign up with Google" : "Sign in with Google"}
        </span>
      </button>
      <p className="text-center text-neutral-700 dark:text-neutral-300 mt-4">
        {isRegister ? (
          <>
            Already have an account?{" "}
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setIsRegister(false)}
            >
              Sign in
            </button>
          </>
        ) : (
          <>
            Don&apos;t have an account?{" "}
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setIsRegister(true)}
            >
              Sign up
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default FormComponent;

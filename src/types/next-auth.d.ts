// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    firstName: string;
    lastName: string;
    email: string;
    id: string;
  }

  interface Session {
    user: User;
  }
}

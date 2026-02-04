"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginForm() {
  return (
    <section className="flex flex-col w-[345px] h-[398px] gap-5 p-6 border border-[#E9EAEB rounded-xl text-[#181D27]">
      <h2 className="font-bold text-[20px]/[34px]">Sign In</h2>
      <div className="flex flex-col gap-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="h-12"
        />
        <p className="hidden text-[#EE1D52] text-[12px]/[24px] ">
          Error Text Helper
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="h-12"
        />
        <p className="hidden text-[#EE1D52] text-[12px]/[24px] ">
          Error Text Helper
        </p>
      </div>

      <Button type="submit" className="h-12 rounded-full bg-[#0093DD]">
        Login
      </Button>
      <span className="w-full text-center">
        Don't have an account?{" "}
        <Link
          href="/register"
          className=" text-[#0093DD] font-semibold text-[14px]/[28px]"
        >
          Register
        </Link>{" "}
      </span>
    </section>
  );
}

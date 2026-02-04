"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <section className="flex flex-col w-[345px] h-[598px] gap-5 p-6 border border-[#E9EAEB rounded-xl text-[#181D27]">
      <h2 className="font-bold text-[20px]/[34px]">Sign Up</h2>
      <div className="flex flex-col gap-1">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          className="h-12"
        />
        <p className="hidden text-[#EE1D52] text-[12px]/[24px] ">
          Error Text Helper
        </p>
      </div>
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

      <div className="flex flex-col gap-1">
        <Label htmlFor="password2">Confirm Password</Label>
        <Input
          id="password2"
          type="password"
          placeholder="Enter your confirm password"
          className="h-12"
        />
        <p className="hidden text-[#EE1D52] text-[12px]/[24px] ">
          Error Text Helper
        </p>
      </div>

      <Button type="submit" className="h-12 rounded-full bg-[#0093DD]">
        Register
      </Button>
      <span className="w-full text-center">
        Already have an account?{" "}
        <Link
          href="/login"
          className=" text-[#0093DD] font-semibold text-[14px]/[28px]"
        >
          Log in
        </Link>{" "}
      </span>
    </section>
  );
}

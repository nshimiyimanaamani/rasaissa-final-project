"use client";
import React from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import UserDropdown from "./UserDropDown";

export default function HeaderBar({}) {
  const pathname = usePathname()?.substring(1);
  let trimmedPathname = "";
  if (pathname != null) {
    trimmedPathname = pathname.length > 16 ? pathname.substring(16) : pathname;
  }
  return (
    <>
      <div className="flex flex-col-reverse  lg:flex-row justify-between  px-4 pt-4 mb-10">
        <h1 className="font-bold text-2xl capitalize">{trimmedPathname}</h1>
        <div className="flex">
          <small className="font-bold pt-2">Welcome Admin !!</small>
          <UserDropdown />
        </div>
      </div>
    </>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LinkContainer from "./link-container";

export default function Header() {
  
  return (
    <header className="border-y p-4 flex items-center">
      <Link href="/">
        <div className="bg-emerald-600 w-12 h-12 text-white flex items-center justify-center text-2xl font-bold rounded">
          d.
        </div>
      </Link>
    </header>
  );
}
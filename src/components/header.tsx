"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const navLinks = [
    {
      href: "/",
      label: "home",
    },
    {
      href: "/kanban",
      label: "kanban",
    },
    {
      href: "/dashboard",
      label: "dashboard",
    },
  ];
  return (
    <header className="border-y p-4 flex items-center">
      <Link href="/">
        <div className="bg-emerald-600 w-12 h-12 text-white flex items-center justify-center text-2xl font-bold rounded">
          d.
        </div>
      </Link>
      <ul className="ml-auto flex gap-x-4">
        {navLinks.map((link) => {
          return (
            <li
              key={link.href}
              className={
                pathname === link.href ? "text-emerald-600 font-bold capitalize" : "text-zinc-400 capitalize"
              }
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
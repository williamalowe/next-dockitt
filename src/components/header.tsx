"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const navLinks = [
    {
      label: "home",
      href: "/",
    },
    {
      label: "kanban",
      href: "/kanban",
    },
    {
      label: "dashboard",
      href: "/dashboard",
    },
  ];
  const pathname = usePathname();
  return (
    <header className="flex items-center p-4 border-b-2">
      <Link href="/">
        <div className="border-2 w-fit p-2 rounded text-xl font-bold tracking-wide">
          dockitt.
        </div>
      </Link>
      <ul className="flex ml-auto gap-x-4 capitalize">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={
                pathname === link.href
                  ? "bg-white text-neutral-900 font-bold p-2 rounded border-2 tracking-wide"
                  : "bg-neutral-900 text-white p-2 rounded border-2 tracking-wide"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

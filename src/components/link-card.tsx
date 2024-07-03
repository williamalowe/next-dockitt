import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function LinkCard({
  href,
  title,
  subtitle,
  icon,
}: {
  href: string;
  title: string;
  subtitle: string;
  icon: IconDefinition;
}) {
  return (
    <Link
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <FontAwesomeIcon
        icon={icon}
        className="h-16 w-auto absolute z-10 top-2 right-2 text-9xl text-slate-100 group-hover:text-green-400 group-hover:rotate-12 transition-transform duration-300"
      />
      <FontAwesomeIcon
        icon={icon}
        className="h-6 w-auto mb-2 text-2xl text-emerald-600 group-hover:text-white transition-colors relative z-10 duration-300"
      />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </Link>
  );
}

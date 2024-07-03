import {
  faChartLine,
  faPlus,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import LinkCard from "./link-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDyalog } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const navLinks = [
    {
      title: "Dockitt",
      subtitle: "View All Tasks",
      href: "/",
      icon: faDyalog,
    },
    {
      title: "Kanban",
      subtitle: "View Kanban Board",
      href: "/kanban",
      icon: faTableColumns,
    },
    {
      title: "Dashboard",
      subtitle: "View Stats",
      href: "/dashboard",
      icon: faChartLine,
    },
    {
      title: "New Task",
      subtitle: "Add New Task",
      href: "/new-task",
      icon: faPlus,
    },
  ];
  return (
    <nav className="grid gap-4 grid-cols-2 lg:grid-cols-4 p-4">
      {navLinks.map((link) => (
        <LinkCard
          key={link.href}
          title={link.title}
          subtitle={link.subtitle}
          href={link.href}
          icon={link.icon}
        />
      ))}
    </nav>
  );
}

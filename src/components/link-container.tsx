import {
  faChartLine,
  faHouse,
  faPlus,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import LinkCard from "./link-card";

export default function LinkContainer() {
  const navLinks = [
    {
      title: "Home",
      subtitle: "View All Tasks",
      href: "/",
      icon: faHouse,
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
    <nav className="grid gap-4 grid-cols-2 lg:grid-cols-4">
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

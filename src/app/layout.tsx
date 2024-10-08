import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import Sidebar from "@/components/sidebar";
import TaskContextProvider from "@/context/task-context";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dockitt | WL",
  description: "Task Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} h-screen bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50 flex`}
      >
        <ThemeContextProvider>
          <TaskContextProvider>
            <Sidebar />
            {children}
            <ThemeSwitch />
          </TaskContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

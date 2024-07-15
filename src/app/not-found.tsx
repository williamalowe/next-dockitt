"use client"

import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter();
  router.push("/");
  return (
    <div className="flex items-center content-center text-center">
      Oops! Something has gone wrong.
    </div>
  )
}

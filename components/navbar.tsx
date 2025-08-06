"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function Navbar() {


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2" aria-label="Enterprise AI Homepage">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={40}
            />          

          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

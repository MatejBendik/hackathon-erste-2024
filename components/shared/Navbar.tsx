'use client'

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { UserPen } from 'lucide-react';

import Image from 'next/image'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link";

const Navbar = () => {
  const { setTheme } = useTheme()

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-100 dark:bg-gray-900 shadow-md w-full absolute z-50">
      {/* Logo and clickable title */}
      <a href="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 duration-200 dark:hover:text-blue-400">
        <Image
          src="/logo.jpg"
          width={35}
          height={35}
          alt="Erste AI logo"
          className="rounded-full"
        />
        <span>My AI Version</span>
      </a>

      {/* <div className="hidden md:flex space-x-6">
        <a href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
        <a href="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">About</a>
        <a href="/features" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Features</a>
        <a href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
      </div> */}

      <div className="flex items-center space-x-4">
        {localStorage.getItem("formData") &&
          <Button variant="outline" size="icon">
            <Link href={{
              pathname: "/avatar",
              query: { mode: "edit" }
            }}>
              <UserPen />
            </Link>
          </Button>
        }

        {/* Dark mode toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
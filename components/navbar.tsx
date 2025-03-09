"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Ship } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Ship className="h-6 w-6" />
            <span className="font-bold">Global Trade Hub</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/products"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === "/products" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Products
            </Link>
            <Link
              href="/shipping"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === "/shipping" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Shipping
            </Link>
            <Link
              href="/tracking"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === "/tracking" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Tracking
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
"use client"
import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const items = ["Discover", "Creators", "Pricing", "Log in"]

  return (
    <nav className="bg-background shadow-lg border-b border-border w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          
          {/* Left Side: Logo & Search */}
          <div className="flex items-center gap-8 flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground shrink-0 cursor-pointer">
              Marketplace
            </h1>
            
            {/* Desktop Search Bar */}
            <div className="hidden lg:flex bg-muted px-4 py-2.5 rounded-full w-full max-w-md hover:bg-muted/80 transition-colors duration-200">
              <div className="flex items-center gap-3 w-full">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  className="flex-1 border-none bg-transparent focus:outline-none text-foreground placeholder-muted-foreground text-sm"
                  placeholder="Search for ebooks, icons..."
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className="text-primary-foreground bg-primary px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all duration-200 font-medium text-sm whitespace-nowrap"
            >
              Start Selling
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pt-2 pb-6 space-y-4 transition-all">
          {/* Mobile Search */}
          <div className="bg-muted px-4 py-3 rounded-xl flex items-center gap-3">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              className="flex-1 bg-transparent border-none focus:outline-none text-sm"
              placeholder="Search..."
            />
          </div>
          
          <ul className="flex flex-col gap-4">
            {items.map((item, index) => (
              <li
                key={index}
                className="text-muted-foreground text-base font-medium py-2 border-b border-border/50"
              >
                {item}
              </li>
            ))}
          </ul>
          
          <Link
            href="/"
            className="block text-center text-primary-foreground bg-primary w-full py-4 rounded-xl font-bold"
          >
            Start Selling
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Header
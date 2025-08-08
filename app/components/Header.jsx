"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Career", href: "/career" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if link is active
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 my-4 relative">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-gray-200 rounded-full shadow-sm">
            <div className="flex h-16 items-center justify-between px-6">
              {/* Logo - Left aligned */}
              <div className="flex items-center flex-shrink-0">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/Vertical Full Color logo.svg"
                    alt="Fewlix"
                    width={120}
                    height={40}
                    className="object-contain cursor-pointer"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                      isActive(item.href)
                        ? "bg-green-400 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Desktop Contact Button */}
              <div className="hidden md:flex items-center space-x-4 group">
                <Link
                  href={"/contact"}
                  variant="outline"
                  className="rounded-full border-gray-300 border-2 text-gray-700 bg-transparent px-4 py-2"
                >
                  Contact Us
                </Link>
                <button
                  size="icon"
                  className="rounded-full bg-green-400 hover:bg-green-500 text-black p-4 rotate-[-45deg] group-hover:rotate-0 transition-transform"
                >
                  <ArrowRight className="h-4 w-4 font-extrabold group-hover:font-black" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown with animation */}
        <div
          className={`md:hidden absolute left-0 right-0 transition-[max-height,opacity] duration-500 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } bg-white border border-gray-200 rounded-b-lg shadow-lg mx-4 sm:mx-6 lg:mx-8`}
          style={{ top: "100%" }}
        >
          <nav className="flex flex-col space-y-4 p-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-lg font-medium rounded-full transition-colors text-center ${
                  isActive(item.href)
                    ? "bg-green-400 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Contact Section */}
            <div className="pt-6 border-t flex items-center justify-center space-x-3">
              <Link
                href={"/contact"}
                className="rounded-full border-gray-300 border-2 text-gray-700 bg-transparent px-4 py-2 flex-1 text-center"
              >
                Contact Us
              </Link>
              <button
                size="icon"
                className="rounded-full bg-green-400 hover:bg-green-500 text-black p-4 rotate-[-45deg] transition-transform"
              >
                <ArrowRight className="h-4 w-4 font-extrabold" />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

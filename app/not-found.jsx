"use client"

import Link from "next/link"
import { Home } from "lucide-react"
import "./glitch.css"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-4 overflow-hidden">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Glitchy 404 Text */}
        <div className="relative">
          <h1 className="text-9xl md:text-[12rem] font-black glitch-text select-none text-transparent">404</h1>
          <h1 className="absolute inset-0 text-9xl md:text-[12rem] font-black glitch-text-shadow select-none text-slate-900">
            404
          </h1>
          <h1 className="absolute inset-0 text-9xl md:text-[12rem] font-black glitch-text-shadow-2 select-none text-neutral-300">
            404
          </h1>
        </div>

        {/* Glitchy Message */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl glitch-message font-extralight text-neutral-700">This page fell into the void.</p>
          <p className="text-sm md:text-base glitch-subtitle font-extralight text-red-600">
            {"// ERROR: Reality.exe has stopped working"}
          </p>
        </div>

        {/* Glitchy button */}
        <div className="pt-4">
          <button asChild size="lg" className="hover:bg-neutral-100 bg-neutral-200 text-neutral-900">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4 transition-transform group-hover:scale-110" />
              Go Home
            </Link>
          </button>
        </div>

        {/* Glitch Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="glitch-line glitch-line-1"></div>
          <div className="glitch-line glitch-line-2"></div>
        </div>
      </div>
    </div>
  )
}

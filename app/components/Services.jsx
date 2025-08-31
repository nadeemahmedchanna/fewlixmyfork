"use client"

import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: "Marketing",
    description: "Turn underperforming ad accounts into reliable revenue generators.",
    image: "/placeholder.svg?height=120&width=200"
  },
  {
    title: "Branding", 
    description: "Look, sound, and feel like the brand your customer already trusts.",
    image: "/placeholder.svg?height=120&width=200"
  },
  {
    title: "Production",
    description: "Produce high-quality visuals that convince your audience to act.",
    image: "/placeholder.svg?height=120&width=200"
  },
  {
    title: "Content Creation",
    description: "Scroll-stopping content that feels native, not forced.",
    image: "/placeholder.svg?height=120&width=200"
  }
]

export default function ServicesSection() {
  const [isDark, setIsDark] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null) // ✅ removed TS generic
  const blurredTextRef = useRef(null) // ✅ removed TS generic

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Change theme when START of section reaches middle of viewport
        setIsDark(rect.top <= windowHeight / 2)
      }
    }

    const handleMouseMove = (e) => {
      if (blurredTextRef.current) {
        const rect = blurredTextRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousemove', handleMouseMove)
    
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={`min-h-screen transition-all rounded-2xl duration-500 ease-in-out ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row gap-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Graphics for Businesses That Value
<span className="block">Purpose, Not Just Pixels.</span>
          </h2>
          <p className={`text-[1rem] max-w-md transition-colors duration-500 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
From bold branding to scroll-stopping graphics, we help your business stand out, stay memorable, and drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:bg-green-500 hover:text-black cursor-pointer ${
                isDark 
                  ? 'bg-gray-900 border-gray-800 hover:border-green-500' 
                  : 'bg-gray-50 border-gray-200 hover:border-green-500'
              }`}
            >
              {/* Service Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-green-500 group-hover:text-black transition-colors duration-300">
                  {service.title}
                </h3>
                <ArrowUpRight 
                  className="w-6 h-6 text-green-500 group-hover:text-black group-hover:rotate-0 rotate-45 transition-all duration-300" 
                />
              </div>
              
              {/* Description */}
              <p className={`text-sm mb-4 transition-colors duration-300 ${
                isDark ? 'text-gray-300 group-hover:text-black' : 'text-gray-600 group-hover:text-black'
              }`}>
                {service.description}
              </p>
              
              {/* Image */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Blurred Text with Spotlight Effect */}
        <div className="relative md:block hidden">
          <div
            ref={blurredTextRef}
            className="relative  text-4xl md:text-6xl font-bold leading-tight text-green-500"
            style={{
              filter: 'blur(8px)'
            }}
          >
            <div>GET STARTED</div>
            <div>TODAY AND</div>
            <div>EXPERIENCE WHAT</div>
            <div>IMPACTFUL BRAND</div>
            <div>FEELS LIKE</div>
            <div>TOMORROW</div>
          </div>
          
          {/* Unblurred version that gets revealed by mask */}
          <div
            className="absolute inset-0  text-4xl md:text-6xl font-bold leading-tight text-green-500 pointer-events-none"
            style={{
              WebkitMask: `radial-gradient(circle 15rem at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 30%, rgba(0,0,0,0.3) 60%, transparent 100%)`,
              mask: `radial-gradient(circle 15rem at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 30%, rgba(0,0,0,0.3) 60%, transparent 100%)`
            }}
          >
            <div>GET STARTED</div>
            <div>TODAY AND</div>
            <div>EXPERIENCE WHAT</div>
            <div>IMPACTFUL BRAND</div>
            <div>FEELS LIKE</div>
            <div>TOMORROW</div>
          </div>
        
        </div>
      </div>
    </section>
  )
}

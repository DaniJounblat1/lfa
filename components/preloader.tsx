"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide the loader after 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]">
      {/* Pulse Animation Container */}
      <div className="relative flex flex-col items-center animate-pulse">
        <Image
          src="/images/main-logo.png"
          alt="Loading..."
          width={120}
          height={120}
          className="object-contain drop-shadow-2xl"
          priority
        />
        <div className="mt-6 flex gap-2">
          {/* 3 Bouncing Dots */}
          <div className="h-3 w-3 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 rounded-full bg-white animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 rounded-full bg-primary animate-bounce"></div>
        </div>
      </div>
    </div>
  )
}

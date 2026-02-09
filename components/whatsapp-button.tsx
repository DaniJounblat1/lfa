"use client"

import { Phone } from "lucide-react"
import { useState } from "react"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
}

const WhatsAppButton = ({
  phoneNumber = "96176988681",
  message = "Hello, I'm interested in Labweh Football Academy!",
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
      aria-label="Contact via WhatsApp"
    >
      <Phone size={24} />
    </button>
  )
}

export default WhatsAppButton

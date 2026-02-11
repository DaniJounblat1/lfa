"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"

const NAV_LINKS = [
  { href: "/", labelKey: "nav.home", default: "Home" },
  { href: "/about", labelKey: "nav.about", default: "About" },
  { href: "/programs", labelKey: "nav.programs", default: "Programs" },
  { href: "/gallery", labelKey: "nav.gallery", default: "Gallery" },
  { href: "/players", labelKey: "nav.players", default: "Players" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/main-logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <span className="font-bold text-lg text-white hidden sm:inline-block uppercase tracking-wider">
            LFA Academy
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  pathname === link.href
                    ? "bg-primary text-secondary"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {t(link.labelKey) || link.default}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile Toggle & Switcher */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button 
            className="text-white p-2 z-[70]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* FIXED MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-slate-950 transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-black uppercase italic tracking-tighter transition-all duration-300 ${
                pathname === link.href ? "text-primary scale-110" : "text-white hover:text-primary"
              }`}
              style={{ 
                transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
                transform: isOpen ? "translateX(0)" : "translateX(20px)"
              }}
            >
              {t(link.labelKey) || link.default}
            </Link>
          ))}
          
          <div className="pt-10">
             <Image src="/images/main-logo.png" alt="Logo" width={80} height={80} className="opacity-20" />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

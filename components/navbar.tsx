"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-950/95 backdrop-blur-sm shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/main-logo.png"
            alt="Labweh Football Academy Logo"
            width={55}
            height={55}
            className="rounded-lg"
          />
          <span className="font-bold text-xl text-white hidden md:inline-block">Labweh Football Academy</span>
         
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 mr-4">
            <Link
              href="/"
              className="text-white hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-white/10"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-white/10"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/programs"
              className="text-white hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-white/10"
            >
              {t("nav.programs")}
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-white/10"
            >
              {t("nav.gallery")}
            </Link>
            <Link
              href="/players"
              className="text-white hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-white/10"
            >
              {t("nav.players")}
            </Link>
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-sm absolute top-full left-0 right-0 p-4 shadow-lg">
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-white hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-white/10"
              onClick={toggleMenu}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-white/10"
              onClick={toggleMenu}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/programs"
              className="text-white hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-white/10"
              onClick={toggleMenu}
            >
              {t("nav.programs")}
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-white/10"
              onClick={toggleMenu}
            >
              {t("nav.gallery")}
            </Link>
            <Link
              href="/players"
              className="text-white hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-white/10"
              onClick={toggleMenu}
            >
              {t("nav.players")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar

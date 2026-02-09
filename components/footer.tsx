"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/lfa-logo.png"
                alt="Labweh Football Academy Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h3 className="font-bold text-xl">LFA</h3>
            </div>
            <p className="text-gray-300 mb-4">{t("footer.about")}</p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/l_f_a_961"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4 section-heading">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-primary transition-colors">
                  {t("nav.programs")}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-primary transition-colors">
                  {t("nav.gallery")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 section-heading">{t("footer.contactUs")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <Link href="https://wa.me/+96176988681" className="text-gray-300 hover:text-primary transition-colors">
                  +961 76 988 681
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Labweh Football Academy. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

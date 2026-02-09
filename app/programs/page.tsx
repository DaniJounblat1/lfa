"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Programs() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-20">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t("programs.hero.title")}</h1>
            <p className="text-xl text-gray-200 mb-8">{t("programs.hero.description")}</p>
          </div>
        </div>
      </section>

      {/* Youth Development Program */}
      <section id="youth" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading">{t("programs.youth.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{t("programs.youth.p1")}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">{t("programs.youth.p2")}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <span>{t("ages")} 6-12</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <span>2 {t("sessions")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-primary" />
                  <span>{t("summer")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <span>{t("allLevels")}</span>
                </div>
              </div>

              <a href="https://wa.me/96176988681" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold">
                  {t("cta.contact")} <ArrowRight size={16} className="ml-2" />
                </Button>
              </a>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/young.png"
                alt="Youth Development Program at Labweh Football Academy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Elite Training Program */}
      <section id="elite" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/images/elite.webp"
                alt="Elite Training Program at Labweh Football Academy"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 section-heading">{t("programs.elite.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{t("programs.elite.p1")}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">{t("programs.elite.p2")}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <span>{t("ages")} 13-18</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <span>3 {t("sessions")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-primary" />
                  <span>{t("summer")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <span>{t("allLevels")}</span>
                </div>
              </div>

              <a href="https://wa.me/96176988681" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold">
                  {t("cta.contact")} <ArrowRight size={16} className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Goalkeeper Training Program */}
      <section id="goalkeeper" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading">{t("programs.goalkeeper.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{t("programs.goalkeeper.p1")}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">{t("programs.goalkeeper.p2")}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <span>{t("allAges")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <span>2 {t("sessions")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-primary" />
                  <span>{t("summer")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <span>{t("allLevels")}</span>
                </div>
              </div>

              <a href="https://wa.me/96176988681" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold">
                  {t("cta.contact")} <ArrowRight size={16} className="ml-2" />
                </Button>
              </a>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/goalkeeper.webp"
                alt="Goalkeeper Training Program at Labweh Football Academy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Summer Camps */}
      <section id="summer" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/images/summer.png"
                alt="Summer Camps at Labweh Football Academy"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 section-heading">{t("programs.summer.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{t("programs.summer.p1")}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">{t("programs.summer.p2")}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <span>{t("allAges")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <span>{t("fullDay")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-primary" />
                  <span>{t("summer")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <span>{t("allLevels")}</span>
                </div>
              </div>

              <a href="https://wa.me/96176988681" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold">
                  {t("cta.contact")} <ArrowRight size={16} className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t("cta.title")}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{t("cta.description")}</p>
          <a href="https://wa.me/96176988681" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold text-lg px-8 py-6">
              {t("cta.contact")}
            </Button>
          </a>
        </div>
      </section>
    </>
  )
}

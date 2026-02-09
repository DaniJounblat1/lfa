"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users, Target, Shield, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t("about.hero.title")} <span className="text-primary">{t("home.hero.academy")}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">{t("about.hero.description")}</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/training-1.jpg"
                alt="Football training at Labweh Football Academy"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading">{t("about.story.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{t("about.story.p1")}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">{t("about.story.p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 inline-block section-heading">{t("about.mission.title")}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("about.mission.subtitle")}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("about.mission.description")}</p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("about.vision.subtitle")}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("about.vision.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 inline-block section-heading">{t("about.values.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-6">{t("about.values.description")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("about.values.passion.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("about.values.passion.description")}</p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("about.values.teamwork.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("about.values.teamwork.description")}</p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("about.values.excellence.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("about.values.excellence.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t("cta.title")}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{t("cta.description")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/96176988681" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold text-lg px-8 py-6">
                {t("cta.contact")}
              </Button>
            </a>
            <Link href="/programs">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6"
              >
                {t("cta.programs")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

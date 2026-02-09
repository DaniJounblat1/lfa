"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function Gallery() {
  const { t } = useLanguage()

  // Gallery images data
  const galleryImages = [
    {
      src: "/images/warmup.png",
      alt: "Before Training session at Labweh Football Academy",
      category: "Training",
    },
    {
      src: "/images/younggalery.png",
      alt: "Youth players at Labweh Football Academy",
      category: "Youth",
    },
    {
      src: "/images/3rdgalery.png",
      alt: "Facilities at Labweh Football Academy",
      category: "Facilities",
    },
    {
      src: "/images/team2025.png",
      alt: "Team 2025 training at Labweh Football Academy",
      category: "Elite",
    },
    {
      src: "/images/trophy.png",
      alt: "First Trophy For Labweh Football Academy",
      category: "Trophies",
    },
    {
      src: "/images/summergalery.webp",
      alt: "Summer camp at Labweh Football Academy",
      category: "Summer Camp",
    },
    {
      src: "/images/girls.png",
      alt: "Girls Team photo at Labweh Football Academy",
      category: "Team",
    },
    {
      src: "/images/coaching.png",
      alt: "Coaching session at Labweh Football Academy",
      category: "Coaching",
    },
    {
      src: "/images/matchday.png",
      alt: "Match day at Labweh Football Academy",
      category: "Matches",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-20">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t("gallery.hero.title")}</h1>
            <p className="text-xl text-gray-200 mb-8">{t("gallery.hero.description")}</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                <div className="relative h-64 md:h-72 lg:h-80">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-primary font-medium text-sm">{image.category}</span>
                  <h3 className="text-white font-bold">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

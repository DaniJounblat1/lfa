"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Calendar, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// 1. Import the component we just created
import PlayersSection from "@/components/PlayersSection"

// 2. Import your NEW data file (Make sure this matches your file name exactly)
import allTrainees from '@/data/academyData.json' 

export default function Home() {
  const { t } = useLanguage()
  const [randomPlayers, setRandomPlayers] = useState<any[]>([])

  useEffect(() => {
    // Logic to get 6 random trainees
    // 1. Filter only trainees (exclude coaches)
    const traineesOnly = allTrainees.filter(p => p.role === 'trainee');
    
    // 2. Shuffle the array
    const shuffled = [...traineesOnly].sort(() => 0.5 - Math.random());
    
    // 3. Take the first 6
    setRandomPlayers(shuffled.slice(0, 6));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        {/* Make sure you have a hero-bg class or style for the image */}
        <div className="hero-bg absolute inset-0 bg-cover bg-center -z-10"
        style={{backgroundImage: "url('/images/mainbg.jpg')"}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t("home.hero.title") || "Welcome to our"}{" "} 
              <span className="text-primary">{t("home.hero.academy") || "Academy"}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t("home.hero.description") || "Developing the next generation of football stars."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/programs">
                <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold text-lg px-8 py-6">
                  {t("home.hero.programs") || "Our Programs"}
                </Button>
              </Link>
              <a href="https://wa.me/96176988681" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6 bg-transparent"
                >
                  {t("home.hero.contact") || "Contact Us"}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading">
                {t("home.about.title") || "About Us"}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t("home.about.p1") || "We are dedicated to excellence in football training."}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                {t("home.about.p2") || "Join us to improve your skills and game intelligence."}
              </p>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold">
                  {t("home.about.more") || "Read More"} <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/training-1.jpg"
                alt="Football training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 inline-block section-heading">
              {t("home.programs.title") || "Our Programs"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-6">
              {t("home.programs.description") || "Structured training for every age group."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Program 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image src="/images/training-1.jpg" alt="Youth" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("program.youth.title") || "Youth"}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{t("program.youth.description") || "For ages 6-12"}</p>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Users size={16} className="mr-2" />
                  <span>{t("ages") || "Ages"} 6-12</span>
                </div>
                <Link href="/programs#youth">
                  <Button className="w-full bg-primary hover:bg-primary/80 text-secondary font-bold">
                    {t("program.learnMore") || "Learn More"}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image src="/images/training-2.jpg" alt="Elite" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("program.elite.title") || "Elite"}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{t("program.elite.description") || "For ages 13-18"}</p>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Users size={16} className="mr-2" />
                  <span>{t("ages") || "Ages"} 13-18</span>
                </div>
                <Link href="/programs#elite">
                  <Button className="w-full bg-primary hover:bg-primary/80 text-secondary font-bold">
                    {t("program.learnMore") || "Learn More"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PLAYERS SECTION (UPDATED) --- */}
      <section className="py-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-12 text-white italic uppercase tracking-widest">
             {t("home.players.title") || "Our Elite Trainees"}
           </h2>
           
           {/* Passing the 6 random players to your component */}
           {randomPlayers.length > 0 ? (
             <PlayersSection players={randomPlayers} />
           ) : (
             <div className="text-white">Loading Players...</div>
           )}

           <div className="mt-20">
             <Link href="/players"> 
               <Button className="bg-primary hover:bg-primary/80 text-secondary font-black text-xl px-12 py-8 rounded-full transition-all hover:scale-110 shadow-lg shadow-primary/20">
                 {t("home.players.showAll") || "SHOW ALL PLAYERS"} <ArrowRight size={24} className="ml-2" />
               </Button>
             </Link>
           </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
              <Award className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{t("features.coaching.title") || "Expert Coaching"}</h3>
              <p>{t("features.coaching.description") || "Learn from the best."}</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
              <Users className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{t("features.groups.title") || "Small Groups"}</h3>
              <p>{t("features.groups.description") || "Personalized attention."}</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
              <Calendar className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{t("features.yearRound.title") || "Year Round"}</h3>
              <p>{t("features.yearRound.description") || "Training never stops."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden border-2 border-primary/20">
              <Image src="/images/gallery-1.jpg" alt="Gallery 1" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden border-2 border-primary/20">
              <Image src="/images/gallery-2.jpg" alt="Gallery 2" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden border-2 border-primary/20">
              <Image src="/images/gallery-3.jpg" alt="Gallery 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t("cta.title") || "Ready to Join?"}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/96176988681" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold text-lg px-8 py-6">
                {t("cta.contact") || "Contact Us Now"}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

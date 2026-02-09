"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.gallery": "Gallery",
    "nav.players": "Players",

    // Home Page
    "home.hero.title": "Learn Football at",
    "home.hero.academy": "Labweh Football Academy",
    "home.hero.description":
      "Join our local football academy in Labweh and learn football skills in a fun and friendly environment.",
    "home.hero.programs": "Our Programs",
    "home.hero.contact": "Contact Us on WhatsApp",

    "home.about.title": "About Labweh Football Academy",
    "home.about.p1":
      "Started in 2020, Labweh Football Academy (LFA) is a local academy where kids and teens can learn football skills. We offer training for players of all ages in a friendly, supportive environment.",
    "home.about.p2":
      "At LFA, we focus on having fun while learning the basics of football. Our coaches are passionate about the game and love teaching young players.",
    "home.about.more": "Learn More",

    "home.programs.title": "Our Programs",
    "home.programs.description":
      "We offer a variety of training programs designed to develop players at every stage of their football journey.",
    "home.programs.viewAll": "View All Programs",

    // Program Cards
    "program.youth.title": "Youth Development",
    "program.youth.description": "For players aged 6-12, focusing on fundamental skills and love for the game.",
    "program.elite.title": "Elite Training",
    "program.elite.description": "Advanced training for players aged 13-18 with a focus on competitive play.",
    "program.goalkeeper.title": "Goalkeeper Training",
    "program.goalkeeper.description": "Specialized training for goalkeepers of all ages and skill levels.",
    "program.summer.title": "Summer Camps",
    "program.summer.description": "Intensive training camps during summer holidays for all skill levels.",
    "program.learnMore": "Learn More",

    // Features
    "features.title": "Why Choose LFA",
    "features.description":
      "At Labweh Football Academy, we provide more than just football training. Here's what sets us apart:",
    "features.coaching.title": "Professional Coaching",
    "features.coaching.description":
      "Our coaches are certified professionals with experience at the highest levels of the game.",
    "features.groups.title": "Small Group Training",
    "features.groups.description": "We maintain small group sizes to ensure personalized attention for every player.",
    "features.yearRound.title": "Year-Round Programs",
    "features.yearRound.description":
      "We offer training programs throughout the year, ensuring continuous development.",

    // Gallery
    "gallery.title": "Gallery",
    "gallery.description": "Take a look at our facilities and training sessions.",
    "gallery.viewFull": "View Full Gallery",

    // CTA
    "cta.title": "Want to join our football academy?",
    "cta.description": "Contact us on WhatsApp to learn more about our training sessions and how to join.",
    "cta.contact": "Contact Us on WhatsApp",
    "cta.programs": "See Our Programs",

    // Footer
    "footer.about":
      "A local football academy in Labweh, Lebanon. Join us to learn football skills in a friendly environment.",
    "footer.quickLinks": "Quick Links",
    "footer.contactUs": "Contact Us",
    "footer.rights": "All rights reserved.",

    // Common
    ages: "Ages",
    sessions: "sessions per week",
    allAges: "All ages",
    fullDay: "Full day sessions",
    summer: "Summer holidays",
    allLevels: "All skill levels",

    // Language
    language: "العربية",

    // Players Section
    "players.title": "Our Players",
    "players.description": "Meet the talented players of Labweh Football Academy. Each player has their own FIFA-style card showing their stats and abilities.",
    "players.viewAll": "View All Players",
    "players.pageTitle": "Our Players",
    "players.pageDescription": "Meet our talented players and their FIFA-style cards showcasing their skills and abilities.",
    "players.allPlayers": "All Players",
    "players.allPlayersDesc": "Browse all player cards from Labweh Football Academy",
    "players.coaches": "Our Coaches",
    "players.coachesDesc": "Meet our experienced coaching staff and their players",
    "players.totalPlayers": "Total Players",
    "players.totalCoaches": "Coaches",
    "players.avgRating": "Avg Rating",
    "players.topRating": "Top Rating",

    // About Page
    "about.hero.title": "About",
    "about.hero.description": "Learn more about our local football academy and how we started.",
    "about.story.title": "Our Story",
    "about.story.p1":
      "Labweh Football Academy (LFA) started in 2020 as a small local initiative to give kids in our area a chance to play and learn football. What began as casual training sessions has grown into a community where young players can develop their skills.",
    "about.story.p2":
      "Our academy was created by football enthusiasts who wanted to share their love for the game with the next generation. We're not a professional academy, but we're passionate about football and helping kids enjoy the sport.",
    "about.mission.title": "Mission & Vision",
    "about.mission.subtitle": "Our Mission",
    "about.mission.description":
      "To provide high-quality football training that develops players' technical skills, tactical understanding, physical fitness, and mental strength, while fostering a love for the game and instilling important life values.",
    "about.vision.subtitle": "Our Vision",
    "about.vision.description":
      "To become the leading football academy in Lebanon, recognized for producing skilled players who demonstrate excellence both on and off the field, and to contribute to the growth and development of football in the region.",
    "about.values.title": "Our Values",
    "about.values.description": "At Labweh Football Academy, we are guided by these core values in everything we do.",
    "about.values.passion.title": "Passion",
    "about.values.passion.description":
      "We are passionate about football and committed to sharing that passion with our players.",
    "about.values.teamwork.title": "Teamwork",
    "about.values.teamwork.description":
      "We believe in the power of teamwork and collaboration both on and off the field.",
    "about.values.excellence.title": "Excellence",
    "about.values.excellence.description":
      "We strive for excellence in everything we do, from coaching to player development.",

    // Programs Page
    "programs.hero.title": "Our Programs",
    "programs.hero.description": "Check out our football training sessions for different age groups.",
    "programs.youth.title": "Youth Development Program",
    "programs.youth.p1":
      "Our Youth Development Program is designed for players aged 6-12, focusing on building fundamental skills and fostering a love for the game in a fun, supportive environment.",
    "programs.youth.p2":
      "Players in this program will develop basic technical skills, game understanding, and physical coordination while learning important values like teamwork and sportsmanship.",
    "programs.elite.title": "Elite Training Program",
    "programs.elite.p1":
      "Our Elite Training Program is designed for players aged 13-18 who are looking to take their game to the next level. This program focuses on advanced technical skills, tactical understanding, and competitive play.",
    "programs.elite.p2":
      "Players in this program will receive intensive training from our professional coaches, with a focus on position-specific skills, game strategy, and physical conditioning.",
    "programs.goalkeeper.title": "Goalkeeper Training Program",
    "programs.goalkeeper.p1":
      "Our specialized Goalkeeper Training Program is designed for goalkeepers of all ages and skill levels. This program focuses on the unique skills and techniques required for this critical position.",
    "programs.goalkeeper.p2":
      "Participants will develop handling, positioning, distribution, communication, and decision-making skills under the guidance of our specialized goalkeeper coaches.",
    "programs.summer.title": "Summer Camps",
    "programs.summer.p1":
      "Our intensive Summer Camps provide players with an immersive football experience during the summer holidays. These camps are open to players of all skill levels and focus on technical development, tactical understanding, and fun.",
    "programs.summer.p2":
      "Participants will enjoy full-day sessions that include technical training, small-sided games, fitness activities, and friendly matches in a fun and supportive environment.",

    // Gallery Page
    "gallery.hero.title": "Our Gallery",
    "gallery.hero.description": "Check out photos from our training sessions and activities.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.programs": "البرامج",
    "nav.gallery": "معرض الصور",
    "nav.players": "اللاعبون",

    // Home Page
    "home.hero.title": "تعلم كرة القدم في",
    "home.hero.academy": "أكاديمية اللبوة لكرة القدم",
    "home.hero.description":
      "انضم إلى أكاديميتنا المحلية لكرة القدم في اللبوة وتعلم مهارات كرة القدم في بيئة ممتعة وودية.",
    "home.hero.programs": "برامجنا",
    "home.hero.contact": "تواصل معنا عبر واتساب",

    "home.about.title": "عن أكاديمية اللبوة لكرة القدم",
    "home.about.p1":
      "تأسست أكاديمية اللبوة لكرة القدم (LFA) في عام 2020، وهي أكاديمية محلية حيث يمكن للأطفال والمراهقين تعلم مهارات كرة القدم. نحن نقدم تدريبات للاعبين من جميع الأعمار في بيئة ودية وداعمة.",
    "home.about.p2":
      "في أكاديمية اللبوة، نركز على المتعة أثناء تعلم أساسيات كرة القدم. مدربونا متحمسون للعبة ويحبون تعليم اللاعبين الصغار.",
    "home.about.more": "اقرأ المزيد",

    "home.programs.title": "برامجنا",
    "home.programs.description":
      "نقدم مجموعة متنوعة من البرامج التدريبية المصممة لتطوير اللاعبين في كل مرحلة من مراحل رحلتهم في كرة القدم.",
    "home.programs.viewAll": "عرض جميع البرامج",

    // Program Cards
    "program.youth.title": "تطوير الشباب",
    "program.youth.description": "للاعبين من سن 6-12، مع التركيز على المهارات الأساسية وحب اللعبة.",
    "program.elite.title": "التدريب النخبوي",
    "program.elite.description": "تدريب متقدم للاعبين من سن 13-18 مع التركيز على اللعب التنافسي.",
    "program.goalkeeper.title": "تدريب حراس المرمى",
    "program.goalkeeper.description": "تدريب متخصص لحراس المرمى من جميع الأعمار ومستويات المهارة.",
    "program.summer.title": "المعسكرات الصيفية",
    "program.summer.description": "معسكرات تدريبية مكثفة خلال العطلة الصيفية لجميع مستويات المهارة.",
    "program.learnMore": "اقرأ المزيد",

    // Features
    "features.title": "لماذا تختار أكاديمية اللبوة",
    "features.description": "في أكاديمية اللبوة لكرة القدم، نقدم أكثر من مجرد تدريب كرة القدم. إليك ما يميزنا:",
    "features.coaching.title": "تدريب احترافي",
    "features.coaching.description": "مدربونا محترفون معتمدون ذوو خبرة في أعلى مستويات اللعبة.",
    "features.groups.title": "تدريب مجموعات صغيرة",
    "features.groups.description": "نحافظ على حجم مجموعات صغيرة لضمان اهتمام شخصي لكل لاعب.",
    "features.yearRound.title": "برامج على مدار العام",
    "features.yearRound.description": "نقدم برامج تدريبية على مدار العام، مما يضمن التطوير المستمر.",

    // Gallery
    "gallery.title": "معرض الصور",
    "gallery.description": "ألق نظرة على مرافقنا وجلسات التدريب.",
    "gallery.viewFull": "عرض المعرض الكامل",

    // CTA
    "cta.title": "هل تريد الانضمام إلى أكاديميتنا لكرة القدم؟",
    "cta.description": "تواصل معنا عبر واتساب لمعرفة المزيد عن جلسات التدريب وكيفية الانضمام.",
    "cta.contact": "تواصل معنا عبر واتساب",
    "cta.programs": "شاهد برامجنا",

    // Footer
    "footer.about": "أكاديمية كرة قدم محلية في اللبوة، لبنان. انضم إلينا لتعلم مهارات كرة القدم في بيئة ممتعة.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contactUs": "اتصل بنا",
    "footer.rights": "جميع الحقوق محفوظة.",

    // Common
    ages: "الأعمار",
    sessions: "جلسات في الأسبوع",
    allAges: "جميع الأعمار",
    fullDay: "جلسات يوم كامل",
    summer: "العطلة الصيفية",
    allLevels: "جميع المستويات",

    // Language
    language: "English",

    // Players Section
    "players.title": "لاعبونا",
    "players.description": "تعرف على لاعبي أكاديمية اللبوة لكرة القدم الموهوبين. كل لاعب لديه بطاقة خاصة به على طراز فيفا تظهر إحصائياته وقدراته.",
    "players.viewAll": "عرض جميع اللاعبين",
    "players.pageTitle": "لاعبونا",
    "players.pageDescription": "تعرف على لاعبينا الموهوبين وبطاقاتهم على طراز فيفا التي تعرض مهاراتهم وقدراتهم.",
    "players.allPlayers": "جميع اللاعبين",
    "players.allPlayersDesc": "تصفح جميع بطاقات اللاعبين من أكاديمية اللبوة لكرة القدم",
    "players.coaches": "مدربونا",
    "players.coachesDesc": "تعرف على طاقمنا التدريبي ذو الخبرة ولاعبيهم",
    "players.totalPlayers": "إجمالي اللاعبين",
    "players.totalCoaches": "المدربون",
    "players.avgRating": "متوسط التقييم",
    "players.topRating": "أعلى تقييم",

    // About Page
    "about.hero.title": "من نحن",
    "about.hero.description": "تعرف أكثر على أكاديميتنا المحلية لكرة القدم وكيف بدأنا.",
    "about.story.title": "قصتنا",
    "about.story.p1":
      "بدأت أكاديمية اللبوة لكرة القدم (LFA) في عام 2020 كمبادرة محلية صغيرة لمنح الأطفال في منطقتنا فرصة للعب وتعلم كرة القدم. ما بدأ كجلسات تدريبية عادية نما ليصبح مجتمعًا حيث يمكن للاعبين الشباب تطوير مهاراتهم.",
    "about.story.p2":
      "تم إنشاء أكاديميتنا من قبل عشاق كرة القدم الذين أرادوا مشاركة حبهم للعبة مع الجيل القادم. نحن لسنا أكاديمية احترافية، لكننا متحمسون لكرة القدم ومساعدة الأطفال على الاستمتاع بالرياضة.",
    "about.mission.title": "المهمة والرؤية",
    "about.mission.subtitle": "مهمتنا",
    "about.mission.description":
      "توفير تدريب كرة قدم عالي الجودة يطور المهارات الفنية للاعبين، والفهم التكتيكي، واللياقة البدنية، والقوة العقلية، مع تعزيز حب اللعبة وغرس قيم الحياة المهمة.",
    "about.vision.subtitle": "رؤيتنا",
    "about.vision.description":
      "أن نصبح الأكاديمية الرائدة لكرة القدم في لبنان، معروفة بإنتاج لاعبين ماهرين يظهرون التميز داخل وخارج الملعب، والمساهمة في نمو وتطوير كرة القدم في المنطقة.",
    "about.values.title": "قيمنا",
    "about.values.description": "في أكاديمية اللبوة لكرة القدم، نسترشد بهذه القيم الأساسية في كل ما نقوم به.",
    "about.values.passion.title": "الشغف",
    "about.values.passion.description": "نحن متحمسون لكرة القدم وملتزمون بمشاركة هذا الشغف مع لاعبينا.",
    "about.values.teamwork.title": "العمل الجماعي",
    "about.values.teamwork.description": "نؤمن بقوة العمل الجماعي والتعاون داخل وخارج الملعب.",
    "about.values.excellence.title": "التميز",
    "about.values.excellence.description": "نسعى للتميز في كل ما نقوم به، من التدريب إلى تطوير اللاعبين.",

    // Programs Page
    "programs.hero.title": "برامجنا",
    "programs.hero.description": "تحقق من جلسات تدريب كرة القدم لدينا لمختلف الفئات العمرية.",
    "programs.youth.title": "برنامج تطوير الشباب",
    "programs.youth.p1":
      "تم تصميم برنامج تطوير الشباب لدينا للاعبين الذين تتراوح أعمارهم بين 6-12 عامًا، مع التركيز على بناء المهارات الأساسية وتعزيز حب اللعبة في بيئة ممتعة وداعمة.",
    "programs.youth.p2":
      "سيطور اللاعبون في هذا البرنامج المهارات الفنية الأساسية، وفهم اللعبة، والتنسيق البدني مع تعلم قيم مهمة مثل العمل الجماعي والروح الرياضية.",
    "programs.elite.title": "برنامج التدريب النخبوي",
    "programs.elite.p1":
      "تم تصميم برنامج التدريب النخبوي لدينا للاعبين الذين تتراوح أعمارهم بين 13-18 عامًا الذين يتطلعون إلى رفع مستوى لعبتهم. يركز هذا البرنامج على المهارات الفنية المتقدمة، والفهم التكتيكي، واللعب التنافسي.",
    "programs.elite.p2":
      "سيتلقى اللاعبون في هذا البرنامج تدريبًا مكثفًا من مدربينا المحترفين، مع التركيز على المهارات الخاصة بالمركز، واستراتيجية اللعبة، والتكييف البدني.",
    "programs.goalkeeper.title": "برنامج تدريب حراس المرمى",
    "programs.goalkeeper.p1":
      "تم تصميم برنامج تدريب حراس المرمى المتخصص لدينا لحراس المرمى من جميع الأعمار ومستويات المهارة. يركز هذا البرنامج على المهارات والتقنيات الفريدة المطلوبة لهذا المركز الحاسم.",
    "programs.goalkeeper.p2":
      "سيطور المشاركون مهارات التعامل، والتموضع، والتوزيع، والتواصل، واتخاذ القرار تحت إشراف مدربي حراس المرمى المتخصصين لدينا.",
    "programs.summer.title": "المعسكرات الصيفية",
    "programs.summer.p1":
      "توفر معسكراتنا الصيفية المكثفة للاعبين تجربة كرة قدم غامرة خلال العطلات الصيفية. هذه المعسكرات مفتوحة للاعبين من جميع مستويات المهارة وتركز على التطوير الفني، والفهم التكتيكي، والمتعة.",
    "programs.summer.p2":
      "سيستمتع المشاركون بجلسات يومية كاملة تشمل التدريب الفني، والألعاب الصغيرة، وأنشطة اللياقة البدنية، والمباريات الودية في بيئة ممتعة وداعمة.",

    // Gallery Page
    "gallery.hero.title": "معرض الصور",
    "gallery.hero.description": "تحقق من الصور من جلسات التدريب والأنشطة لدينا.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    // Set dir attribute on document for RTL support
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"

    // Add appropriate class for RTL styling
    if (language === "ar") {
      document.documentElement.classList.add("rtl")
    } else {
      document.documentElement.classList.remove("rtl")
    }
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage) {
        setLanguageState(savedLanguage)
      }
    }
  }, [])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

"use client";

import React, { useState } from 'react';
import trainees from '@/data/academyData.json'; 
import { useLanguage } from "@/contexts/language-context";
import { Search } from "lucide-react";

// --- CONFIGURATION FOR CARD POSITIONS ---
// Adjust these to fit your specific background images perfectly
const layouts = {
  back: {
    bg: "/images/cardbg.png",
    ratingPos: "top-[14%] left-[9%]", 
    imagePos: "top-[17%] w-[270px]",   
    namePos: "top-[65%]",
    statsPos: "bottom-[15%]",
    textColor: "text-[offwhite]" 
  },
  front: {
    bg: "/images/cardbg1.png",
    ratingPos: "top-[12%] left-[6%]", 
    imagePos: "top-[16%] w-[270px]",   
    namePos: "top-[65%]",
    statsPos: "bottom-[15%]",
    textColor: "text-[#1a1a1a]" // Change if back card is dark
  }
};

const AcademyCardsPage = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTrainees = trainees.filter(player => 
    player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const coaches = filteredTrainees.filter(p => p.role === 'coach');
  const students = filteredTrainees.filter(p => p.role === 'trainee');

  return (
    <div className="min-h-screen bg-[#0f172a] p-4 md:p-10 pt-24 md:pt-32 space-y-12">
      
      {/* Search Bar */}
      <div className="max-w-md mx-auto relative group z-10">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
        </div>
        <input
          type="text"
          placeholder={t("search players ") || "Search players..."}
          className="w-full bg-[#1e293b] text-white border-2 border-slate-700 rounded-full py-3 pl-12 pr-6 outline-none focus:border-primary transition-all font-medium"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* SECTION 1: COACHES */}
      {coaches.length > 0 && (
        <section>
          <h2 className="text-2xl font-black text-white uppercase italic mb-8 border-l-4 border-yellow-500 pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-4">
            {t(" coaches") || "Technical Staff"}
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-10 justify-items-center perspective-container">
            {coaches.map((player) => (
              <CardWrapper key={player.id}>
                <FifaCard3D player={player} />
              </CardWrapper>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: TRAINEES */}
      {students.length > 0 && (
        <section>
          <h2 className="text-2xl font-black text-white uppercase italic mb-8 border-l-4 border-blue-500 pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-4">
            {t(" trainees") || "Academy Trainees"}
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-10 justify-items-center perspective-container">
            {students.map((player) => (
              <CardWrapper key={player.id}>
                <FifaCard3D player={player} />
              </CardWrapper>
            ))}
          </div>
        </section>
      )}

      {filteredTrainees.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-xl font-bold italic uppercase tracking-widest">No Players Found</p>
        </div>
      )}
    </div>
  );
};

const CardWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="scale-[0.45] xs:scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 origin-top h-[240px] xs:h-[280px] sm:h-[400px] md:h-[480px] lg:h-[520px] perspective-[1000px]">
    {children}
  </div>
);

// --- THE 3D FLIP COMPONENT ---
const FifaCard3D = ({ player }: { player: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // DATA LOGIC: 
  // If 'stats2' exists in JSON, use it for back. Otherwise use 'stats'.
  // If 'image2' exists, use it. Otherwise use 'image'.
  const frontData = { ...player, stats: player.stats, image: player.image };
  const backData = { ...player, stats: player.stats2 || player.stats, image: player.image2 || player.image };

  return (
    <div 
      className="relative w-[350px] h-[500px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* INNER CONTAINER THAT ROTATES */}
      <div 
        className="relative w-full h-full transition-all duration-700  rounded-[30px]"
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* === FRONT FACE === */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[30px] overflow-hidden backface-hidden"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <CardFace layout={layouts.front} data={frontData} />
        </div>

        {/* === BACK FACE (Rotated 180deg by default) === */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[30px] overflow-hidden backface-hidden"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <CardFace layout={layouts.back} data={backData} />
        </div>
      </div>
    </div>
  );
};

// --- REUSABLE CARD FACE COMPONENT ---
const CardFace = ({ layout, data }: { layout: any, data: any }) => (
  <div 
    className="w-full h-full bg-no-repeat ltr"
    style={{ 
      backgroundImage: `url('${layout.bg}')`, 
      // This forces the image to stretch/shrink to the container size exactly
      backgroundSize: '100% 100%', 
      backgroundPosition: 'center',
      fontFamily: "'Oswald', sans-serif" 
    }}
  >
    {/* ... rest of the code remains the same ... */}

  
    {/* Rating */}
    <div className={`absolute ${layout.ratingPos} ${layout.textColor} leading-none flex flex-col items-center z-10`}>
      <span className="text-6xl font-black">{data.rating}</span>
      <span className="text-2xl font-bold uppercase">{data.position}</span>
    </div>

    {/* Image */}
    <div className={`absolute ${layout.imagePos} left-0 right-0 mx-auto flex items-end justify-center`}>
      <img src={data.image} alt={data.name} className="w-full h-full object-contain drop-shadow-2xl" />
    </div>

    {/* Name */}
    <div className={`absolute ${layout.namePos} w-full text-center`}>
      <h2 className={`text-3xl font-black ${layout.textColor} tracking-tighter truncate px-6 `}>
        {data.name}
      </h2>
    </div>

    {/* Stats */}
    <div className={`absolute ${layout.statsPos} w-full px-7`}>
      <div className={`grid grid-cols-6 gap-0 pt-2 ${layout.textColor}`}>
        <StatCol label="PAC" val={data.stats.pac} />
        <StatCol label="SHO" val={data.stats.sho} />
        <StatCol label="PAS" val={data.stats.pas} />
        <StatCol label="DRI" val={data.stats.dri} />
        <StatCol label="DEF" val={data.stats.def} />
        <StatCol label="PHY" val={data.stats.phy} />
      </div>
    </div>

    {/* flag */}
    <div className="absolute bottom-[4%] w-full flex justify-center items-center gap-6">
      <img src={data.flag} alt="Flag" className="h-6 w-8 object-cover border border-black/10" />
      <img src={data.club} alt="Club" className="h-9 w-9 object-contain" />
    </div>
  </div>
);

const StatCol = ({ label, val }: { label: string; val: number }) => (
  <div className="flex flex-col items-center inherit">
    <span className="text-[17px] font-black leading-none opacity-80">{label}</span>
    <span className="text-3xl font-black leading-none opacity-90">{val}</span>
  </div>
);

export default AcademyCardsPage;

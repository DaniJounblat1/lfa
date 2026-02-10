"use client";

import React, { useState } from 'react';

// --- CONFIGURATION FOR CARD POSITIONS ---
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
    textColor: "text-[#1a1a1a]" 
  }
};

const PlayersSection = ({ players }: { players: any[] }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-10 justify-items-center mt-10">
      {players.map((player) => (
        <CardWrapper key={player.id}>
          <FifaCard3D player={player} />
        </CardWrapper>
      ))}
    </div>
  );
};

const CardWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="scale-[0.45] xs:scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 origin-top h-[240px] xs:h-[280px] sm:h-[400px] md:h-[480px] lg:h-[520px] perspective-[1000px]">
    {children}
  </div>
);

const FifaCard3D = ({ player }: { player: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const frontData = { ...player, stats: player.stats, image: player.image };
  const backData = { ...player, stats: player.stats2 || player.stats, image: player.image2 || player.image };

  return (
    <div className="relative w-[350px] h-[500px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <div 
        className="relative w-full h-full transition-all duration-700"
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 w-full h-full rounded-[30px] overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
          <CardFace layout={layouts.front} data={frontData} />
        </div>

        {/* BACK */}
        <div className="absolute inset-0 w-full h-full rounded-[30px] overflow-hidden" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <CardFace layout={layouts.back} data={backData} />
        </div>
      </div>
    </div>
  );
};

const CardFace = ({ layout, data }: { layout: any, data: any }) => (
  <div 
    className="w-full h-full bg-no-repeat ltr"
    style={{ 
      backgroundImage: `url('${layout.bg}')`, 
      backgroundSize: '100% 100%', 
      backgroundPosition: 'center',
      fontFamily: "'Oswald', sans-serif" 
    }}
  >
    <div className={`absolute ${layout.ratingPos} ${layout.textColor} leading-none flex flex-col items-center z-10`}>
      <span className="text-6xl font-black">{data.rating}</span>
      <span className="text-2xl font-bold uppercase">{data.position}</span>
    </div>

    <div className={`absolute ${layout.imagePos} left-0 right-0 mx-auto flex items-end justify-center`}>
      <img src={data.image} alt={data.name} className="w-full h-full object-contain drop-shadow-2xl" />
    </div>

    <div className={`absolute ${layout.namePos} w-full text-center`}>
      <h2 className={`text-3xl font-black ${layout.textColor} tracking-tighter truncate px-6 uppercase`}>
        {data.name}
      </h2>
    </div>

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

    <div className="absolute bottom-[4%] w-full flex justify-center items-center gap-6">
      <img src={data.flag} alt="Flag" className="h-6 w-8 object-cover border border-black/10" />
      <img src={data.club} alt="Club" className="h-9 w-9 object-contain" />
    </div>
  </div>
);

const StatCol = ({ label, val }: { label: string; val: number }) => (
  <div className="flex flex-col items-center">
    <span className="text-[17px] font-black leading-none opacity-80">{label}</span>
    <span className="text-3xl font-black leading-none opacity-90">{val}</span>
  </div>
);

export default PlayersSection;

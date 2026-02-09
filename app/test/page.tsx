"use client";

import React from 'react';
import trainees from './academyData.json'; 

const AcademyCardsPage = () => {
  const coaches = trainees.filter(p => p.role === 'coach');
  const students = trainees.filter(p => p.role === 'trainee');

  return (
    // Added pt-24 to push the content down below the floating navbar
    <div className="min-h-screen bg-[#0f172a] p-4 md:p-10 pt-24 md:pt-32 space-y-16">
      
      {/* SECTION 1: COACHES */}
      {coaches.length > 0 && (
        <section>
          <h2 className="text-2xl font-black text-white uppercase italic mb-8 border-l-4 border-yellow-500 pl-4">
            Technical Staff
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-10 justify-items-center">
            {coaches.map((player) => (
              <CardWrapper key={player.id}>
                <FifaCard player={player} />
              </CardWrapper>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: TRAINEES */}
      {students.length > 0 && (
        <section>
          <h2 className="text-2xl font-black text-white uppercase italic mb-8 border-l-4 border-blue-500 pl-4">
            Academy Trainees
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-10 justify-items-center">
            {students.map((player) => (
              <CardWrapper key={player.id}>
                <FifaCard player={player} />
              </CardWrapper>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const CardWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="scale-[0.45] xs:scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 origin-top h-[240px] xs:h-[280px] sm:h-[400px] md:h-[480px] lg:h-[520px]">
    {children}
  </div>
);

const FifaCard = ({ player }: { player: any }) => (
  <div 
    className="relative w-[350px] h-[500px] bg-no-repeat bg-contain shrink-0"
    style={{ 
      backgroundImage: "url('/images/cardbg.png')", 
      fontFamily: "'Oswald', sans-serif" 
    }}
  >
    {/* Rating & Position */}
    <div className="absolute top-[20%] left-[12%] text-[#2a1d0a] leading-none flex flex-col items-center">
      <span className="text-6xl font-black">{player.rating}</span>
      <span className="text-2xl font-bold uppercase">{player.position}</span>
    </div>

    {/* Player Image */}
    <div className="absolute top-[20%] left-10 right-0 mx-auto w-[220px] h-[220px] flex items-end justify-center">
      <img src={player.image} alt={player.name} className="w-full h-full object-contain drop-shadow-2xl" />
    </div>

    {/* Name Section */}
    <div className="absolute top-[62.3%] w-full text-center">
      <h2 className="text-3xl font-black text-[#2a1d0a] tracking-tighter truncate px-6 ">
        {player.name}
      </h2>
    </div>

    {/* Stats Grid */}
    <div className="absolute bottom-[22%] w-full px-10">
      <div className="grid grid-cols-6 gap-0 pt-2">
        <StatCol label="PAC" val={player.stats.pac} />
        <StatCol label="SHO" val={player.stats.sho} />
        <StatCol label="PAS" val={player.stats.pas} />
        <StatCol label="DRI" val={player.stats.dri} />
        <StatCol label="DEF" val={player.stats.def} />
        <StatCol label="PHY" val={player.stats.phy} />
      </div>
    </div>

    {/* Footer */}
    <div className="absolute bottom-[14%] w-full flex justify-center items-center gap-6">
      <img src={player.flag} alt="Flag" className="h-6 w-8 object-cover border border-black/10" />
      <img src={player.club} alt="Club" className="h-9 w-9 object-contain" />
    </div>
  </div>
);

const StatCol = ({ label, val }: { label: string; val: number }) => (
  <div className="flex flex-col items-center text-[#2a1d0a]">
    <span className="text-[15px] font-black leading-none ">{label}</span>
    <span className="text-2xl font-black leading-none opacity-90">{val}</span>
  </div>
);

export default AcademyCardsPage;

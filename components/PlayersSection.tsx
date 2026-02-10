"use client";

import React from 'react';
// Import the shared component directly from your players page
import { FifaCard3D, CardWrapper } from '@/app/players/page'; 

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

export default PlayersSection;

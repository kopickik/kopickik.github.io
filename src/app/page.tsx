'use client';

import Image from 'next/image';

import Footer from '@/components/footer';
import { useState } from 'react';
import ChallengeButtons from '@/components/ChallengeButtons';
import CharacterSelect from '@/components/CharacterSelect';
import Results from '@/components/Results';
import CharacterStats from '@/components/CharacterStats';
import MainNav from '@/components/ui/main-nav';

type Character = {
  name: string;
  gambling: number;
  battle: number;
  chess: number;
};

export default function Home() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [result, setResult] = useState('');

  const characters = [
    { name: 'Knight', gambling: 5, battle: 10, chess: 4 },
    { name: 'Wizard', gambling: 3, battle: 4, chess: 5 },
    { name: 'Rogue', gambling: 8, battle: 6, chess: 3 },
    { name: 'Thief', gambling: 4, battle: 7, chess: 2 },
    { name: 'Lord', gambling: 2, battle: 3, chess: 3 },
    { name: 'Viscount', gambling: 1, battle: 7, chess: 5 },
    { name: 'Marxis', gambling: 4, battle: 3, chess: 4 },
    { name: 'Siren', gambling: 6, battle: 7, chess: 8 },
    { name: 'Homer', gambling: 8, battle: 8, chess: 7 },
    { name: 'Fluffykins', gambling: 3, battle: 10, chess: 6 },
  ];

  const handleResult = (outcome: string) => setResult(outcome);

  return (
    <div className="">
      <MainNav />
      <main className="flex-grow grid grid-cols-4 grid-rows-4 gap-4 p-4">
        <div id="player1-select" className="col-span-2">
          <CharacterSelect
            label="Player 1"
            characters={characters}
            selectedCharacter={player1}
            setSelectedCharacter={setPlayer1}
          />
        </div>
        <div id="player2-select" className="col-span-2">
          <CharacterSelect
            label="Player 2"
            characters={characters}
            selectedCharacter={player2}
            setSelectedCharacter={setPlayer2}
          />
        </div>
        <div id="challenge-buttons" className="col-start-2 col-span-2">
          <ChallengeButtons player1={player1} player2={player2} handleResult={handleResult} />
        </div>
        <div id="results" className="col-span-5 text-center p-4">
          <Results result={result} />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

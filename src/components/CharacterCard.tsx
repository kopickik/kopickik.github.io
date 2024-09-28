import Image from 'next/image';
import { Character } from './CharacterSelect';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }) {
  return (
    <div className={`c-${character.id} rounded-lg`} tabIndex={0}>
      <div className="text-transparent focus:bg-gradient-to-tr hover:bg-gradient-to-tr from-slate-950 grow c-text-holder text-xs hover:text-emerald-200 focus:text-emerald-200 p-2 font-semibold rounded-md cursor-pointer h-full">
        <div>
          <p className="name">{character.name}</p>
          <br />
          <br />
          {character.experience && <p>⏲️ Experience: {character.experience}</p>}
          {character.ai && <p>🤖 AI: {character.ai}</p>}
          <p>🎲 Gambling: {character.gambling}</p>
          <p>⚔️ Battle: {character.battle}</p>
          <p>♟️ Chess: {character.chess}</p>
          {character.bonus && <p>Bonus: {character.bonus}</p>}
        </div>
      </div>
    </div>
  );
}

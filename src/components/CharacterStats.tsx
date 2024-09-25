import { Character } from './CharacterSelect';

interface CharacterSelectProps {
  character: Character | null;
}

export default function CharacterStats({ character }: CharacterSelectProps) {
  if (!character) return null;

  return (
    <div className="glassomorphic w-full h-full p-4 transition-opacity duration-500 opacity-100 visible">
      <h3 className="text-lg font-bold mb-2">{character.name}'s Stats</h3>
      <p>🎲 Gambling: {character.gambling}</p>
      <p>⚔️ Battle: {character.battle}</p>
      <p>♟️ Chess: {character.chess}</p>
    </div>
  );
}

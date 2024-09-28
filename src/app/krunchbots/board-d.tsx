import CharacterCard from '@/components/CharacterCard';
import { Character } from '@/components/CharacterSelect';

interface BoardProps {
  characters: Character[];
}

export default function BoardD({ characters }) {
  const rows = [characters.slice(0, 5), characters.slice(5, 10)];

  return (
    <div className="board-d">
      {rows.map((chars, i) => (
        <div key={i} className={`grid grid-cols-5 justify-center`}>
          {chars.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      ))}
    </div>
  );
}

import CharacterCard from '@/components/CharacterCard';
import { Character } from '@/db/schema';
import { Key } from 'react';

interface BoardProps {
  characters: Character[];
}

const BoardD: React.FC<BoardProps> = ({ characters }) => {
  const rows = [characters.slice(0, 5), characters.slice(5, 10)];

  return (
    <div className="board-d">
      {rows.map((chars, i) => (
        <div key={i} className={`grid grid-cols-5 justify-center mb-8`}>
          {chars.map((char: Character) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BoardD;

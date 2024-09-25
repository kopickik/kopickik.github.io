import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import CharacterStats from './CharacterStats';

export interface Character {
  name: string;
  experience?: string;
  ai?: string;
  gambling: number;
  battle: number;
  chess: number;
}

interface CharacterSelectProps {
  label: string;
  characters: Character[];
  selectedCharacter: Character | null;
  setSelectedCharacter: (character: Character) => void;
}

export default function CharacterSelect({
  label,
  characters,
  selectedCharacter,
  setSelectedCharacter,
}: CharacterSelectProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div id="character-select-box" className="character-select-box">
        {label}
      </div>
    </div>
    // <div className="min-w-36 w-full">
    //   <div id="character-select" className="my-8">
    //     <h2 className="text-xl font-semibold mb-4">{label}</h2>
    //     <Select
    //       onValueChange={(value) => {
    //         const selected = characters.find((char) => char.name === value);
    //         if (selected) setSelectedCharacter(selected);
    //       }}
    //     >
    //       <SelectTrigger className="w-full bg-gray-800 border border-gray-700">
    //         <SelectValue
    //           placeholder={selectedCharacter ? selectedCharacter.name : 'Select a character'}
    //         />
    //       </SelectTrigger>
    //       <SelectContent>
    //         {characters.map((character, index) => (
    //           <SelectItem key={index} value={character.name}>
    //             {character.name}
    //           </SelectItem>
    //         ))}
    //       </SelectContent>
    //     </Select>
    //   </div>
    //   <CharacterStats character={selectedCharacter} />
    // </div>
  );
}

import { Button } from '@/components/ui/button';

type Character = {
  name: string;
  gambling: number;
  battle: number;
  chess: number;
};

type Props = {
  player1: Character | null;
  player2: Character | null;
  handleResult: (outcome: string) => void;
};

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const gamble = (player1: Character, player2: Character) => {
  return getRandomInt(10) + player1.gambling > getRandomInt(10) + player2.gambling
    ? `${player1.name} wins the gamble!`
    : `${player2.name} wins the gamble!`;
};

const battle = (player1: Character, player2: Character) => {
  return getRandomInt(10) + player1.battle > getRandomInt(10) + player2.battle
    ? `${player1.name} wins the battle!`
    : `${player2.name} wins the battle!`;
};

const chess = (player1: Character, player2: Character) => {
  return getRandomInt(10) + player1.chess > getRandomInt(10) + player2.chess
    ? `${player1.name} wins the chess match!`
    : `${player2.name} wins the chess match!`;
};

export default function ChallengeButtons({ player1, player2, handleResult }: Props) {
  if (!player1 || !player2) {
    return <p className="pt-36 text-center mb-4">Select both players to start!</p>;
  }

  return (
    <div className="flex flex-col justify-center w-9/12 content-center">
      <Button variant="default" onClick={() => handleResult(gamble(player1, player2))}>
        Gambling
      </Button>
      <Button variant="secondary" onClick={() => handleResult(battle(player1, player2))}>
        Battle
      </Button>
      <Button variant="outline" onClick={() => handleResult(chess(player1, player2))}>
        Chess
      </Button>
    </div>
  );
}

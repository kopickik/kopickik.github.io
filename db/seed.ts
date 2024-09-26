import { db } from '.';
import { characters as charactersTable } from './schema';

type Character = {
  name: string;
  experience?: string;
  ai?: string;
  gambling: number;
  battle: number;
  chess: number;
  bonus?: string;
};

const charactersData: Character[] = [
  {
    name: 'Block Turret',
    experience: 'Legendary',
    ai: 'Lanchain/GPTs',
    gambling: 5,
    battle: 10,
    chess: 4,
  },
  {
    name: 'Fujia Capicom',
    experience: 'Legendary',
    ai: 'ChainLink',
    gambling: 5,
    battle: 10,
    chess: 4,
    bonus: 'Crypto chat',
  },
  { name: 'Shreder', gambling: 5, battle: 10, chess: 4 },
  { name: 'Dynamo', gambling: 3, battle: 4, chess: 5 },
  { name: 'Predator', gambling: 8, battle: 6, chess: 3 },
  { name: 'Lord', gambling: 4, battle: 7, chess: 2 },
  { name: 'Thief', gambling: 2, battle: 3, chess: 3 },
  { name: 'Viscount', gambling: 1, battle: 7, chess: 5 },
  { name: 'Marxis', gambling: 4, battle: 3, chess: 4 },
  { name: 'Siren', gambling: 6, battle: 7, chess: 8 },
];

async function seedDb() {
  try {
    await db.delete(charactersTable).run();
    for (const char of charactersData) {
      await db.insert(charactersTable).values(char).run();
    }

    console.log(`Characters seeded!`);
  } catch (err) {
    console.error(`Error seeding db: ${err}`);
  } finally {
  }
}

seedDb();

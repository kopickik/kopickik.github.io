import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../db';
import { characters } from '../db/schema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const allCharacters = await db.select().from(characters);
    res.status(200).json(allCharacters);
  } else if (req.method === 'POST') {
    // tbd
  } else {
    res.status(405).end();
  }
}

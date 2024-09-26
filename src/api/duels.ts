import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../db';
import { duels } from '../../db/schema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const allDuels = await db.select().from(duels);
    res.status(200).json(allDuels);
  } else if (req.method === 'POST') {
    const { character1Id, character2Id, result } = req.body;
    const [newDuel] = await db
      .insert(duels)
      .values({ character1Id, character2Id, result })
      .returning();
    res.status(201).json(newDuel);
  } else {
    res.status(405).end(); // Method not allowed
  }
}

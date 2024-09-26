import { InferInsertModel, InferModelFromColumns, InferSelectModel } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const characters = sqliteTable('characters', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  experience: text('experience'),
  ai: text('ai'),
  gambling: integer('gambling').notNull(),
  battle: integer('battle'),
  chess: integer('chess'),
  bonus: text('bonus'),
});

export type Character = InferSelectModel<typeof characters>;

export const duels = sqliteTable('duels', {
  id: integer('id').primaryKey(),
  character1Id: integer('character1_id')
    .notNull()
    .references(() => characters.id),
  character2Id: integer('character2_id')
    .notNull()
    .references(() => characters.id),
  result: text('result'),
});

export type Duel = InferInsertModel<typeof duels> | InferSelectModel<typeof duels>;

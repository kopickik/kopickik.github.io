import { sql } from 'drizzle-orm';
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

export const duels = sqliteTable('duels', {
  id: integer('id').primaryKey(),
  character1Id: integer('character1_id')
    .notNull()
    .references(() => characters.id),
  character2Id: integer('character2_id')
    .notNull()
    .references(() => characters.id),
  result: text('result'),
  createdAt: text('created_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

export type InsertCharacter = typeof characters.$inferInsert;
export type SelectCharacter = typeof characters.$inferSelect;

export type InsertDuel = typeof duels.$inferInsert;
export type SelectDuel = typeof duels.$inferSelect;

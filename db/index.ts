import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import sqlite3 from 'sqlite3';

const sqlite = new sqlite3.Database('./local/sqlite.db');
export const db = drizzle(sqlite);

Promise.resolve(() => {
  migrate(db, { migrationsFolder: 'drizzle/migrations' });
})
  .then((success) => {
    console.log(`Migrations ran.\nsuccess === ${success}`);
  })
  .catch((reason) => {
    console.error(`There was a problem: ${reason}`);
  });

import { createClient } from '@libsql/client';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';

config({ path: '.env' });

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client);

Promise.resolve(() => {
  migrate(db, { migrationsFolder: 'drizzle/migrations' });
})
  .then((success) => {
    console.log(`Migrations ran.\nsuccess === ${success}`);
  })
  .catch((reason) => {
    console.error(`There was a problem: ${reason}`);
  });

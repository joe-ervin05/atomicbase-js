# Atomicbase-js

A server-side sdk for [Atomicbase](https://github.com/joe-ervin05/atomicbase).

This library provides an ORM-like restful client that makes managing many Turso databases much easier. This is especially useful for situations where not all of your databases have the same schema.

> [!WARNING]
> This client is for use server-side only and is not currently meant to be a complete standalone backend.

## Quick start

### The npm package doesnt actually exist yet

install

```bash
npm install atomicbase-js
```

```typescript
import { AtomicClient, column } from 'atomicbase-js';

const ATOMIC_SERVER_URL = 'http://localhost:8080';
const ATOMIC_PRIVATE_KEY = 'MY_PRIVATE_KEY';

const client = new AtomicClient(
    ATOMIC_SERVER_URL,
    ATOMIC_PRIVATE_KEY
)

// creates a new turso database
client.createDB("my_database_name");

// connects to the new turso database
const dbClient = client.with("my_database_name");

// creates a new table and adds it to the schema cache
dbClient.schema.createTable("users", {
    id: column.integer({ primaryKey: true }),
    name: column.text(),
    username: column.text(),
    dob: column.integer()
})

// Executes SELECT id, name, username FROM [users] WHERE name = joe ORDER BY name
dbClient.from("users").select({ select:"id,name,username", where: { name: "eq.joe" }, order: "name" })
```

The package includes functions for managing databases:
- createDB()
- deleteDb()
- listDbs()

As well as functions for querying your databases:

- select()
- insert()
- update()
- upsert()
- delete()

As well as functions for managing the schema of your databases:

- edit()
- invalidateSchema()
- createTable()
- dropTable()
- withTable()
- withTable.renameTable()
- withTable.renameColumns()
- withTable.addColumns()
- withTable.dropColumns()

It is important to call `invalidateSchema()` if any schema changes are made without using the client so that the schema cache stays up to date.
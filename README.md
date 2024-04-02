# Atomicbase-js

A server-side sdk for [Atomicbase](https://github.com/joe-ervin05/atomicbase).

This library provides an ORM-like restful client that makes managing many Turso databases much easier. This is especially useful for situations where not all of your databases have the same schema.

> [!WARNING]
> This client is for use server-side only and is not currently meant to be a complete standalone backend.

## Quick start

install

```bash
npm install @atomicbase/atomicbase-js
```

```typescript
import { AtomicClient } from '@atomicbase/atomicbase-js';

const ATOMIC_SERVER_URL = 'http://localhost:8080';
const ATOMIC_PRIVATE_KEY = 'MY_SERVERS_PRIVATE_KEY';
const ATOMIC_DBNAME = 'myDB';

const client = new AtomicClient(
    ATOMIC_SERVER_URL, 
    ATOMIC_PRIVATE_KEY, 
    ATOMIC_DBNAME // leave blank to access the primary DB
);
```

The package includes functions for querying your databases:

- select()
- insert()
- update()
- upsert()
- delete()

As well as functions for managing the schema of your databases:

- schema.edit()
- schema.invalidateSchema()
- schema.createTable()
- schema.alterTable()
- schema.dropTable()

It is important to call `invalidateSchema()` if any schema changes are made without using the client so that the schema cache stays up to date.
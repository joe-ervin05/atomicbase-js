export type SelectOptions = {
    select?: string;
    order?: string;
    where?: Record<string, string>
}

export type InsertOptions = {
    insert: Record<string, any>;
    select?: string;
    order?: string;
}

export type UpsertOptions = {
    upsert: Record<string, any>[];
    select?: string;
    order?: string;
}

export type UpdateOptions = {
    update: Record<string, any>[];
    select?: string;
    order?: string;
    where?: Record<string, string>;
}

export type DeleteOptions = {
    select?: string;
    order?: string;
    where: Record<string, string>;
}

export type Headers = {
    "Authorization": string,
    "DB-Name"?: string,
    "Prefer"? : "resolution=merge-duplicates"
}

export type ColumnOptions = {
    primaryKey?: boolean;
    references?: string;
    onDelete?: 'no action' | 'restrict' | 'set null' | 'set default' | 'cascade';
    onUpdate?: 'no action' | 'restrict' | 'set null' | 'set default' | 'cascade';
}


export type Column = {
    type : string;
    primaryKey?: boolean;
    references? : string;
    onDelete?: 'no action' | 'restrict' | 'set null' | 'set default' | 'cascade';
    onUpdate?: 'no action' | 'restrict' | 'set null' | 'set default' | 'cascade';
}

export type Table = Record<string, Column>;
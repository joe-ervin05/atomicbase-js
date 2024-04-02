
export type ColOpts = {
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

export type Table = Record<string, Column>

export const column = {

    integer(options : ColOpts = {}) {
        const col : Column = {
            type: "INTEGER"
        }
        if (options.primaryKey) {
            col.primaryKey = options.primaryKey;
        }

        if (options.references) {
            col.references = options.references;
        }

        if (options.onUpdate) {
            col.onUpdate = options.onUpdate;
        }

        if (options.onDelete) {
            col.onDelete = options.onDelete;
        }

        return col
    },
    real(options : ColOpts = {}) {
        const col : Column = {
            type: "REAL"
        }
        if (options.primaryKey) {
            col.primaryKey = options.primaryKey;
        }

        if (options.references) {
            col.references = options.references;
        }

        if (options.onUpdate) {
            col.onUpdate = options.onUpdate;
        }

        if (options.onDelete) {
            col.onDelete = options.onDelete;
        }

        return col
    },
    text(options : ColOpts = {}) {
        const col : Column = {
            type: "TEXT"
        }
        if (options.primaryKey) {
            col.primaryKey = options.primaryKey;
        }

        if (options.references) {
            col.references = options.references;
        }

        if (options.onUpdate) {
            col.onUpdate = options.onUpdate;
        }

        if (options.onDelete) {
            col.onDelete = options.onDelete;
        }

        return col
    },
    blob(options : ColOpts = {}) {
        const col : Column = {
            type: "BLOB"
        }
        if (options.primaryKey) {
            col.primaryKey = options.primaryKey;
        }

        if (options.references) {
            col.references = options.references;
        }

        if (options.onUpdate) {
            col.onUpdate = options.onUpdate;
        }

        if (options.onDelete) {
            col.onDelete = options.onDelete;
        }

        return col
    },
}
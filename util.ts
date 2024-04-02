import type { ColumnOptions, Column } from "./types";

export const column = {

    integer(options : ColumnOptions = {}) {
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
    real(options : ColumnOptions = {}) {
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
    text(options : ColumnOptions = {}) {
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
    blob(options : ColumnOptions = {}) {
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
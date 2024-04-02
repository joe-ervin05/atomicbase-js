import fetch from "cross-fetch";
import type { Headers, Table } from "./types";

export default class AtomicSchemaClient {
    private url : string;
    private dbName : string | undefined;
    private secretKey : string;

    constructor(url : string, dbName : string | undefined, secretKey : string) {
        this.url = url;
        this.dbName = dbName;
        this.secretKey = secretKey;
    }

    withTable(tblName : string) {
        return {
            renameTable: async (newName : string) => {
                const headers : Headers = {
                    "Authorization": "Bearer "+this.secretKey
                }
        
                if (this.dbName) {
                    headers["DB-Name"] = this.dbName;
                }
        
                const resp = await fetch(`${this.url}/api/schema/table/${tblName}/rename/${newName}`, {
                    headers,
                    method: "POST"
                })
        
                return resp.json();
            },
            renameColumns: async (columns : Record<string, string>) => {
        
            },
            addColumns: async (newColumns : Table) => {
                
            },
            dropColumn: async (colName : string) => {
                
            }
        }
    }

    async createTable(name : string, table : Table) : Promise<{ data: any, error : string | null }> {
        const headers : Headers = {
            "Authorization": "Bearer "+this.secretKey
        }

        if (this.dbName) {
            headers["DB-Name"] = this.dbName;
        }

        const resp = await fetch(`${this.url}/api/schema/table/${name}`, {
            headers,
            method: "POST",
            body: JSON.stringify(table)
        })

        return resp.json();
    }

    async dropTable(name : string) : Promise<{ data: any, error : string | null }> {
        const headers : Headers = {
            "Authorization": "Bearer "+this.secretKey
        }

        if (this.dbName) {
            headers["DB-Name"] = this.dbName;
        }

        const resp = await fetch(`${this.url}/api/schema/table/${name}`, {
            headers,
            method: "DELETE",
        })

        return resp.json();
    }

    async edit(query : string, ...args : any[]) : Promise<{ data: any, error : string | null }> {
        const headers : Headers = {
            "Authorization": "Bearer "+this.secretKey,
        }

        if (this.dbName) {
            headers["DB-Name"] = this.dbName;
        }

        const resp = await fetch(`${this.url}/api/schema`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                query,
                args
            })
        })

        return resp.json();
    }

    async invalidate() : Promise<{ data: any, error : string | null }> {
        const headers : Headers = {
            "Authorization": "Bearer "+this.secretKey,
        }

        if (this.dbName) {
            headers["DB-Name"] = this.dbName;
        }

        const resp = await fetch(`${this.url}/api/schema/invalidate`, {
            method: "POST",
            headers
        })

        return resp.json();
    }

}
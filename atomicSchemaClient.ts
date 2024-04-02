import fetch from "cross-fetch";
import type { Headers } from "./types";
import type { Table } from "./util";

export default class AtomicSchemaClient {
    private url : string;
    private dbName : string | undefined;
    private secretKey : string;

    constructor(url : string, dbName : string | undefined, secretKey : string) {
        this.url = url;
        this.dbName = dbName;
        this.secretKey = secretKey;
    }

    async alterTable(name : string) : Promise<{ data: any, error : string | null }> {
        const headers : Headers = {
            "Authorization": "Bearer "+this.secretKey
        }

        if (this.dbName) {
            headers["DB-Name"] = this.dbName;
        }

        const resp = await fetch(`${this.url}/api/schema/table/${name}`, {
            method: "PATCH"
        })

        return resp.json();
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
import fetch from "cross-fetch";
import type { Headers, SelectOptions, InsertOptions, DeleteOptions, UpdateOptions, UpsertOptions } from "./types";

export default class AtomicQueryClient {
    private secretKey : string;
    private dbName : string | undefined;
    private url : string;
    private relation: string;

    constructor(url : string, relation : string, dbName : string | undefined, secretKey : string) {
        this.dbName = dbName;
        this.secretKey = secretKey;
        this.url = url;
        this.relation = relation;
    }

    async select(options : SelectOptions = {}) : Promise<{ data: any, error : string | null }> {
        let reqUrl = `${this.url}/api/${this.relation}`;
        if (!options.select) {
            options.select = "*"
        }

        reqUrl+= "?select=" + options.select + addWhere(options.where);

        const headers : Headers = {
            "Authorization": "Bearer "+this.secretKey,
        }

        if (this.dbName) {
            headers["DB-Name"] = this.dbName;
        }

        const resp = await fetch(reqUrl, {
            method: "GET",
            headers
        })

        return resp.json();
    }

    async update(options : UpdateOptions) : Promise<{ data: any, error : string | null }> {
        let reqUrl = `${this.url}/api/${this.relation}`;
        let params = "";

        if (options.select) {
            params += "&select="+options.select;
        }

        params += addWhere(options.where);

        if (params) {
            reqUrl += "?"+params.slice(1);
        }

        const headers : Headers = {
            "Authorization": "Bearer "+this.secretKey,
        }

        if (this.dbName) {
            headers["DB-Name"] = this.dbName;
        }

        const resp = await fetch(reqUrl, {
            method: "PATCH",
            headers,
            body: JSON.stringify(options.update)
        })

        return resp.json();
    }

    async insert(options : InsertOptions) : Promise<{ data: any, error : string | null }> {
        let reqUrl = `${this.url}/api/${this.relation}`;
        
        if (options.select) {
            reqUrl += "?select="+options.select;
            if (options.order) {
                reqUrl+="&order="+options.order;
            }
        }

        const headers : Headers = {
            "Authorization": "Bearer "+this.secretKey,
        }

        if (this.dbName) {
            headers["DB-Name"] = this.dbName;
        }

        const resp = await fetch(reqUrl, {
            method: "POST",
            headers,
            body: JSON.stringify(options.insert)
        })

        return resp.json();
    }

    async upsert(options : UpsertOptions) : Promise<{ data: any, error : string | null }> {
        let reqUrl = `${this.url}/api/${this.relation}`;

        if (options.select) {
            reqUrl += "?select="+options.select;
            if (options.order) {
                reqUrl += "&order="+options.order;
            }
        }

        const headers : Headers = {
            "Authorization": "Bearer "+this.secretKey,
            "Prefer": "resolution=merge-duplicates"
        }

        if (this.dbName) {
            headers["DB-Name"] = this.dbName;
        }

        const resp = await fetch(reqUrl, {
            method: "POST",
            headers,
            body: JSON.stringify(options.upsert)
        })

        return resp.json();
    }

    async delete(options : DeleteOptions) : Promise<{ data: any, error : string | null }> {
        let reqUrl = `${this.url}/api/${this.relation}`;
        let params = "";

        if (options.select) {
            params += "?select="+options.select;

            if (options.order) {
                params += "&order="+options.order;
            }
        }

        params += addWhere(options.where);

        if (params) {
            reqUrl += "?"+params.slice(1);
        }

        const headers : Headers = {
            "Authorization": "Bearer "+this.secretKey,
        }

        if (this.dbName) {
            headers["DB-Name"] = this.dbName;
        }

        const resp = await fetch(reqUrl, {
            method: "DELETE",
            headers
        })

        return resp.json();
    }
}

function addWhere(where : Record<string, string> | undefined) {
    if (!where) {
        return ""
    }

    let params = "";
    for (const [key, value] of Object.entries(where)) {
        params += `&${key}=${value}`;
    }

    return params;
}
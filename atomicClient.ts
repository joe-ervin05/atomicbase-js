import AtomicDBClient from "./atomicDBClient";

export default class AtomicClient {
    private url : string;
    private secretKey : string;

    constructor(url : string, secretKey : string) {
        this.url = url;
        this.secretKey = secretKey;
    }

    with(dbName : string) {
        return new AtomicDBClient(this.url, this.secretKey, dbName);
    }

    withPrimary() {
        return new AtomicDBClient(this.url, this.secretKey)
    }

    listDBs() {
        
    }

    createDB(dbName : string) {

    }

    deleteDB() {

    }

}
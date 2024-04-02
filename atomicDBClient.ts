import AtomicQueryClient from "./atomicQueryClient";
import AtomicSchemaClient from "./atomicSchemaClient";

export default class AtomicDBClient {
    private url : string;
    private secretKey : string;
    private dbName : string | undefined;
    schema : AtomicSchemaClient;

    constructor(url : string, secretKey : string, dbName : string | undefined = undefined) {
        this.url = url;
        this.secretKey = secretKey;
        this.dbName = dbName;
        this.schema = new AtomicSchemaClient(this.url, this.dbName, this.secretKey);
    }
    
    from(relation : string) {
        return new AtomicQueryClient(this.url, relation, this.dbName, this.secretKey);
    }

}
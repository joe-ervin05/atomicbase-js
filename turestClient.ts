import TurestQueryClient from "./turestQueryClient";
import TurestSchemaClient from "./turestSchemaClient";

export default class TurestClient {
    private url : string;
    private secretKey : string;
    private dbName : string | undefined;
    schema : TurestSchemaClient;

    constructor(url : string, secretKey : string, dbName : string | undefined = undefined) {
        this.url = url;
        this.secretKey = secretKey;
        this.dbName = dbName;
        this.schema = new TurestSchemaClient(this.url, this.dbName, this.secretKey);
    }
    
    from(relation : string) {
        return new TurestQueryClient(this.url, relation, this.dbName, this.secretKey);
    }

}
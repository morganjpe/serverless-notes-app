import * as sst from '@serverless-stack/resources';

export default class StorageStack extends sst.Stack {

    bucket;
    table;

    constructor(scope, id, props) {
        super(scope, id, props);

        this.table = new sst.Table(this, "Notes", {
            fields: {
                userID: sst.TableFieldType.STRING,
                noteID: sst.TableFieldType.STRING
            },
            primaryIndex: {
                partitionKey: "userID",
                sortKey: "noteID",
            }
        })

        this.bucket = new sst.Bucket(this, 'uploads');

    }

}
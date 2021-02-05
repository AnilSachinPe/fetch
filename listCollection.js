const MongoClient = require("mongodb").MongoClient;


var url = 'mongodb+srv://remotlogdevuser:info123@iras-prod.v9lcm.mongodb.net/prod_iras?retryWrites=true&w=majority';
const client = new MongoClient(url, { useUnifiedTopology: true }); 

const dbName = "prod_iras";

client
      .connect()
      .then(
        client =>
          client
            .db(dbName)
            .listCollections()
            .toArray() 
      )
      .then(cols => console.log("Collections", cols))
      .finally(() => client.close());
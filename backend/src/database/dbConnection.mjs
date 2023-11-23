import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const mongoClient = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

var _db;

const connectToServer = async () => {
    _db = mongoClient.db("parcial2");
};

const getDb = () => _db;

export default { connectToServer, getDb };

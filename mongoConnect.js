import { MongoClient } from "mongodb"
import dotevn from 'dotenv'
dotevn.config()

const client = new MongoClient(process.env.MONGO_URI)
 const db = client.db('my-mongo-store')

 export default db
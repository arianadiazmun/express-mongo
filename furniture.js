import db from './mongoConnect.js'

const furnitureDb = db.collection('furniture')

export const addFurniture = async (req,res) => {
    //add furniture to our mongo db

    const newFurniture ={type: 'sofa', collection: 'Edgewater', special: false, price: 4899, in_stock: false}

    
    const newFurnitureAdded = await furnitureDb.insertOne(newFurniture)
console.log(newFurnitureAdded)

res.status(201).send(newFurnitureAdded)

}

 export async function getFurniture(req,res) {const readAll=  await furnitureDb
    .find({})
.limit(10)
.toArray()
res.send(readAll)

 }

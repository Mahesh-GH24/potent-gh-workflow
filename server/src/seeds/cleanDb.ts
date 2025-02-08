import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    //Commented on 2/7 due to error with seeding in render
    // let modelExists = await models[modelName].db.db.listCollections({
    //   name: collectionName
    // }).toArray()
    
    // if (!db) {
    //   throw new Error('Error');
    // }

    const modelExists = await models[modelName]?.db?.db?.listCollections({
      name: collectionName
    }).toArray()

    if (modelExists && modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}

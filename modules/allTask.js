const mongo = require('../mongoDB');

const allTasks = async() => {
    await mongo.connect();
    const db = mongo.db('mileStone');
    const col = db.collection('users');
    const docs = await col.find().toArray();
    mongo.close();
    return docs;
}

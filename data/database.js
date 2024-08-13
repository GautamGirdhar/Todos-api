const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
  const client = await MongoClient.connect('mongodb+srv://girdhargautam6:G%40ut%40m%4010122004@cluster0.bdyfw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  database = client.db('second-api');
}

function getDb() {
  if (!database) {
    throw new Error('Database not connected!');
  }

  return database;
}

module.exports = {
  initDb: initDb,
  getDb: getDb
};
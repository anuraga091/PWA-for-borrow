import mongoose from "mongoose";

export const Connection= async (username, password) => {
    const URL = `mongodb://${username}:${password}@webapp-shard-00-00.dfc3b.mongodb.net:27017,webapp-shard-00-01.dfc3b.mongodb.net:27017,webapp-shard-00-02.dfc3b.mongodb.net:27017/PROGRESSIVE-WEB-APP?ssl=true&replicaSet=atlas-varpwy-shard-0&authSource=admin&retryWrites=true&w=majority`
  try{
    await  mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log(`Database Connected Successfully`)
  } catch(error){
    console.log(`Error while connecting the database`, error.message);
  }
}

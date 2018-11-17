// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
  return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server.");

  db.collection("Users").deleteMany({name: "Benjamin"}).then((result) => {
    console.log(result);
  });

  // db.collection("Todos").deleteOne({text: "Walk the dog"}).then((result) => {
  //   console.log(result);
  // });

  db.collection("Users").findOneAndDelete({
    _id: new ObjectID('5bf0764a7c8a7c257c6022dc')
  }).then((result) => {
    console.log(result);
  });

  db.close();
});

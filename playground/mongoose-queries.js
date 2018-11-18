const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {ObjectID} = require("mongodb");
const {User} = require("./../server/models/user");

var userId = "5bf15a40bc8a7990180d0401";

User.findById(userId).then((user) => {
  if (!user) {
    return console.log("User not found");
  }

  console.log("User by ID", user);
}).catch((e) => console.log(e));

// var id = "5bf1a4e8c97d750414023c3811";
//
// if (!ObjectID.isValid(id)) {
//   console.log("ID  not valid");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log("Id not found");
//   }
//   console.log("Todo by ID", todo);
// }).catch((e) => console.log(e));

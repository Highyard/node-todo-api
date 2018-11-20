const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {ObjectID} = require("mongodb");
const {User} = require("./../server/models/user");

// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5bf3f9d62539e974ae241475').then((todo) => {
  console.log(todo);
});

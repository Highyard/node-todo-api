const expect = require("expect");
const request = require("supertest");

const {app} = require("./../server")
const {Todo} = require("./../models/todo");

beforeEach((done) => {
  Todo.deleteMany({}).then(() => done());
});

describe("POST /todos", () => {
  it("should create a new todo", (done) => {

    let text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        console.log(JSON.stringify(res.body, undefined, 2));
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].test).toBe(text);
          done();
        }).catch((e) => done(e));
      })
  });

  it("should not create a todo", (done) => {
    request(app)
      .post("/todos")
      .send({})
      .expect(400)
      .end((err, res) =>{
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(err));
      })
  })
});

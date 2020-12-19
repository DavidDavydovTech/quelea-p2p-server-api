// Packages
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const testGQL = require('./schemas/rootReducer');

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(compression());

// GraphQL testing zone
class Greeter {
  constructor(name) {
    this.name = name;
    this.setName = this.setName.bind(this);
  }

  greet(){
    return `Hello ${this.name}`;
  }

  setName(name) {
    this.name = name;
  }
}

const schema = buildSchema(`

  type Greeter {
    name: String!
    greet: String!
    setName(name: String!): String
  }

  type Query {
    hello: String
    rollDice(dice:Int! ,sides: Int ): [Int]
    getGreeter(name: String!): Greeter
  }
`);

const root = {
  hello: () => {
    return 'Hello world!';
  },
  rollDice: ({dice, sides = 6}) => {
    const rolls = [];
    for (let i = 0; i < dice; i++) {
      rolls.push(Math.ceil(Math.random() * sides));
    }
    console.log(rolls)
    return rolls;
  },
  getGreeter: ({name}) => {
    return new Greeter(name);
  }
  // test: (bool) => {
  //   if (bool) return 'True!';
  //   return 'BZZZZ! WRONG ANSWER BUDDY!'
  // }
};

app.use('/', graphqlHTTP({
  schema: testGQL,
  rootValue: root,
  graphiql: true,
}));
// End of GraphQL testing zone

module.exports = app;
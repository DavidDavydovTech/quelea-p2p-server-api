const nsql = require('nano-sql');
const { makeExecutableSchema } = require('graphql-tools');


const findUser = makeExecutableSchema({
  typeDefs: `#graphql
    type Query {
      findUser: String
    }
  `,
  resolvers: {
    Query: {
      findUser: ({}) => {
          return "You found a user!"
      },
    }

  }
})

module.exports = findUser;

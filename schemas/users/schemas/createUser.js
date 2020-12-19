const nsql = require('nano-sql');
const { makeExecutableSchema } = require('graphql-tools');


const createUser = makeExecutableSchema({
  typeDefs: `#graphql
    type Mutation {
      createUser( 
        email: String!, 
        firstName: String!, 
        middleName: String!, 
        lastName: String!, 
        birthMonth: Int, 
        birthDay: Int 
        ): String
    }
  `,
  resolvers: {
    Mutation: {
      createUser: ({
        email, 
        firstName, 
        middleName, 
        lastName, 
        birthMonth,
        birthDay,
        profilePicture
        }) => {
          return "You created a user!"
      }
    }
  }
})

module.exports = createUser;

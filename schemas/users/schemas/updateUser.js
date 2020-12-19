const nsql = require('nano-sql');
const { makeExecutableSchema } = require('graphql-tools');


const updateUser = makeExecutableSchema({
  typeDefs: `#graphql
    type Mutation {
      updateUser(
        email: String, 
        firstName: String, 
        middleName: String, 
        lastName: String, 
        birthMonth: Int,
        birthDay: Int
        ): Boolean
    }
  `,
  resolvers: {
    Mutation: {
      updateUser: ({
        email, 
        firstName, 
        middleName, 
        lastName, 
        birthMonth,
        birthDay,
        profilePicture
        }) => {
          return "You updated a user!"
      },
    }

  }
})

module.exports = updateUser;

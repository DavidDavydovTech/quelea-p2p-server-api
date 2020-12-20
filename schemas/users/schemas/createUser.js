const nsql = require('nano-sql');
const { makeExecutableSchema } = require('graphql-tools');
const { 
  wrappedResolver: placeholderResolver,  
  schema: placeholderSchema,
} = require('../../../lib/_sticherPlaceholder');

const createUser = makeExecutableSchema({
  typeDefs: `#graphql
    type Mutation {
      createUser( 
        email: String!, 
        firstName: String!, 
        middleName: String, 
        lastName: String!, 
        birthMonth: Int, 
        birthDay: Int 
        ): String
    }

    ${placeholderSchema}
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
    },
    ...placeholderResolver
  }
})

module.exports = createUser;

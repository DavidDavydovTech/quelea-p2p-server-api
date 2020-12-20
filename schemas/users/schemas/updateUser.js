const nsql = require('nano-sql');
const { makeExecutableSchema } = require('graphql-tools');
const { 
  wrappedResolver: placeholderResolver,  
  schema: placeholderSchema,
} = require('../../../lib/_sticherPlaceholder');


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
    
    ${placeholderSchema}
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
    },
    ...placeholderResolver,
  }
})

module.exports = updateUser;

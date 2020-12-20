const schema = `#graphql
type Query {
  _schemaStitchFixer: String
}`;

const resolver = () => {
  return `Hello there confused developer!
  
  You may be wondering what this query is doing here. This query is a necessary evil that comes from an unfortunate bug with graphql-tool's stitching system. Without it the server would either not run, or would be disorganized to the point of hindering development. 
  
  For more information please see this issue on GitHub: https://github.com/ardatan/graphql-tools/issues/764`;
}

module.exports = {
  schema,
  resolver,
  wrappedResolver: {
    Query: {
      _schemaStitchFixer: resolver
    }
  },
  typeDefs: schema,

}
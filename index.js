// Packages
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');
const { graphqlHTTP } = require('express-graphql');
// GraphQL Schemas
const reducedSchemas = require('./schemas/rootReducer');

// Set up app's middleware
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(compression());
app.use('/', graphqlHTTP({
  schema: reducedSchemas,
  graphiql: true,
}));

module.exports = app;
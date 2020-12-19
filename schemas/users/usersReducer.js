const fs = require('fs');
const path = require('path');
const { stitchSchemas } = require('graphql-tools');

const userSchemas = (() => {
  const schemaPaths = path.join(__dirname, 'schemas');
  fs.readdirSync(schemaPaths).map(schema => {
    const schemaPath = path.join(__dirname, 'schemas', schema)
    return require(schemaPath);
  });
})();

module.exports = stitchSchemas({
  subschemas: userSchemas,
});


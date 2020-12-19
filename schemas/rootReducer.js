const fs = require('fs');
const path = require('path');
const { stitchSchemas } = require('graphql-tools');
const isDir = require('../utils/isDir');

module.exports = stitchSchemas({
  subschemas: (() => {
    const schemaPaths = path.join(__dirname);
    fs.readdirSync(schemaPaths).map(schemaName => {
      const schemaGroupPath = path.join(schemaPaths, schemaName, `${schemaName}Reducer.js`);
      const hasSchemaReducer = fs.existsSync(schemaGroupPath);
      if (hasSchemaReducer === true) {
        return require(schemaGroupPath);
      }
    });
  })(),
});


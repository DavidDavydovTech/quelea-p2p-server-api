const fs = require('fs');
const path = require('path');
const { stitchSchemas } = require('graphql-tools');

module.exports = stitchSchemas({
  subschemas: (() => {
    const folder = path.join(__dirname);
    const folderContents = fs.readdirSync(folder);
    const res = [];

    for (let contentName of folderContents) {
      const pathToSchema = path.join(folder, contentName, `${contentName}Reducer.js`);
      const schemaDoesExist = fs.existsSync(pathToSchema);
      if (schemaDoesExist) {
        res.push(require(pathToSchema));
      }
    }
    
    return res
  })(),
});


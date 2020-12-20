const fs = require('fs');
const path = require('path');
const { stitchSchemas } = require('graphql-tools');

const userSchemas = (() => {
  const folder = path.join(__dirname, 'schemas');
  const folderContents = fs.readdirSync(folder);
  const res = [];

  for (let contentName of folderContents) {
    const contentPath = path.join(folder, contentName);
    res.push(require(contentPath))
  }
  
  return res;
})();

module.exports = stitchSchemas({
  subschemas: userSchemas,
});


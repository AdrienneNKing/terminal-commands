module.exports.ls = () => {

};

const fs = require('fs');

 module.exports.ls = () => {
   fs.readdir('./', (err, files) => {
     const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
   });
 };

module.exports.touch = (input) => {
  fs.writeFile(input, "", "utf8", (err) => {
    if(err) throw err;
    console.log('Success');
  });
};

module.exports.mkdir = (input) => {
  fs.mkdir(input, { recursive:true }, (err) => {
    if(err) throw err;
  });
};

require('dotenv').config();
const fs = require('fs');

const replace = (pathToSrc, pathToDest) => {
    fs.readFile(pathToSrc, 'utf8', function (err, result) {
        if (err) {
            return console.log(err);
        }

        Object.keys(process.env).forEach(key => {
            result = result.replace("${" + key + "}", process.env[key]);
        });

        fs.writeFile(pathToDest, result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
};

module.exports = {
    replace
};

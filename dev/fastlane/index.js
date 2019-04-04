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


/**
 * GOOGLE API
 */
replace('./dev/fastlane/api.json', './android/fastlane/api.json');
replace('./dev/fastlane/gradle.properties', './android/gradle.properties');
replace('./dev/fastlane/google-services.json', './android/app/google-services.json');
replace('./dev/fastlane/google-services.json', './android/app/src/debug/google-services.json');
replace('./dev/fastlane/google-services.json', './android/app/src/release/google-services.json');
fs.createReadStream('./dev/fastlane/key.keystore').pipe(fs.createWriteStream('./android/app/key.keystore'));
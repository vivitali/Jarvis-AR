const fs = require('fs');
const rimraf = require("rimraf");
const utils = require("../utils");

/**
 * GOOGLE API
 */
utils.replace('./dev/fastlane/api.json', './android/fastlane/api.json');
utils.replace('./dev/fastlane/google-services.json', './android/app/google-services.json');
utils.replace('./dev/fastlane/google-services.json', './android/app/src/debug/google-services.json');
utils.replace('./dev/fastlane/google-services.json', './android/app/src/release/google-services.json');
fs.createReadStream('./dev/fastlane/key.keystore').pipe(fs.createWriteStream('./android/app/key.keystore'));
rimraf("./android/app/build", function () { console.log("done"); });

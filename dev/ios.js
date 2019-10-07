const rimraf = require("rimraf");
const fs = require('fs');
const utils = require("./utils");

utils.replace('./dev/fastlane/GoogleService-Info.plist', './ios/GoogleService-Info.plist');

rimraf("./ios/build", function () { console.log("done"); });
fs.unlink('./ios/SSAR.app.dSYM.zip', () => { console.log("done"); });
fs.unlink('./ios/SSAR.ipa', () => { console.log("done"); });

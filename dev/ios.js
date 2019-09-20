const rimraf = require("rimraf");
const fs = require('fs');

rimraf("./ios/build", function () { console.log("done"); });
fs.unlink('./ios/SSAR.app.dSYM.zip', () => { console.log("done"); });
fs.unlink('./ios/SSAR.ipa', () => { console.log("done"); });

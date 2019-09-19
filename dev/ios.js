const rimraf = require("rimraf");

rimraf("./ios/build", function () { console.log("done"); });
rimraf("./ios/SSAR.app.dSYM.zip", function () { console.log("done"); });
rimraf("./ios/SSAR.ipa", function () { console.log("done"); });

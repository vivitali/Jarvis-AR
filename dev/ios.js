const rimraf = require("rimraf");

rimraf("./ios/build", function () { console.log("done"); });

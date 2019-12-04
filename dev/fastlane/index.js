const utils = require("../utils");

/**
 * GOOGLE API
 */
utils.replace('./dev/fastlane/api.json', './android/fastlane/api.json');
utils.replace('./dev/fastlane/google-services.json', './android/app/google-services.json');
utils.replace('./dev/fastlane/google-services.json', './android/app/src/debug/google-services.json');
utils.replace('./dev/fastlane/google-services.json', './android/app/src/release/google-services.json');

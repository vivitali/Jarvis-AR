const fs = require('fs');

const paths = [
  './android/gradle.properties',
  './android/app/key.keystore',
  './android/fastlane/api.json'
];

paths.forEach(path => fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
  }
}));

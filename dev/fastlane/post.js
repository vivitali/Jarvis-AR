const fs = require('fs');

const paths = [
  './android/app/key.keystore',
  './android/fastlane/api.json',
  './android/app/google-services.json',
  './android/app/src/debug/google-services.json',
  './android/app/src/release/google-services.json'
];

paths.forEach(path => fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
  }
}));

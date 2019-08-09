const ncp = require('ncp').ncp;

const source = './dev/node_modules/react-native-text-detector';
const destination = './node_modules/react-native-text-detector';


ncp(source, destination, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('done!');
});
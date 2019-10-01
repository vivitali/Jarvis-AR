## Folder structure
 
    app
    ├── assets
    ├── config
    │   │   layout.js
    │   └── colors.js
    ├── screens
    ├── components
    ├── containers
    │   └── Profile
    │       └── redux
    │           |   actions.js
    │           |   constants.js
    │           |   reducer.js
    │           |   saga.js
    │           |   selectors.js
    │           └── index.js
    │       index.js
    ├──  redux
    │    |   actions.js
    │    |   constants.js
    │    |   reducer.js
    │    |   saga.js
    │    |   selectors.js
    │    |   createStore.js
    │    └── index.js
    ├── navigation
    ├── services
    └── index.js

## Description
TBD

## Development
- IOS 
  - install CocoaPods https://cocoapods.org/
  - run cd ios && pod install

# Running application in dev mode
- check if you have .env file in the root (PLEASE, DO NOT COMMIT THAT FILE)
- run npm run start
- run npm run android (or npm run ios - which is not supported for now)

## Useful tools

### React Native Debugger

Follow instructions from https://github.com/jhen0409/react-native-debugger

## How to build
* ENABLE_BITCODE = No
* Legacy build

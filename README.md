# SphereApp

## Getting Started

This is a React Native app (no Expo) that runs on both Android and iOS using the React Native CLI.

### Prerequisites
- Node.js (v14 or newer recommended)
- npm or yarn
- React Native CLI (`npm install -g react-native-cli`)
- Android Studio (for Android) or Xcode (for iOS)

### Install Dependencies
```
npm install
# or
yarn install
```

### Run on Android
1. Start an Android emulator or connect a device.
2. Run:
```
npx react-native run-android
```

### Run on iOS
1. Open the `ios` folder in Xcode and install pods:
```
cd ios
pod install
cd ..
```
2. Start an iOS simulator or connect a device.
3. Run:
```
npx react-native run-ios
```

### Notes
- Make sure your development environment is set up as per the [React Native CLI Quickstart guide](https://reactnative.dev/docs/environment-setup).
- No Expo dependencies are used.
- For any issues, check the official React Native documentation or your platform's requirements.

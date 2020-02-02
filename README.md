
# react-native-language-loader

## Getting started

`$ npm install react-native-language-loader --save`

### Mostly automatic installation

`$ react-native link react-native-language-loader`

### Manual installation

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNLanguageLoaderPackage;` to the imports at the top of the file
  - Add `new RNLanguageLoaderPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-language-loader'
  	project(':react-native-language-loader').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-language-loader/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-language-loader')
  	```
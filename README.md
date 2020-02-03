
## react-native-language-loader

## Features

NOTE: only works on **Android**

Nothing fancy, just enables you to quickly load a single or multiple languages (which I needed for localization) from your android/app/src/main/assets/languages folder (If you've placed your languages files in that folder).

## Installation

`$ npm install react-native-language-loader --save`

Create a `languages` folder in `android/app/src/main/assets/`

(Example)

<img src="/screenshots/fs.png"/>

## Usage
Load a single language (Using callback)

First parameter is the name of the file (without extension)

Second parameter is the extension
```js
import LanguageLoader from 'react-native-language-loader';

/* Load `en.json` */
LanguageLoader.loadLanguage('en','json',(error,language)=>{
    if(error)
    {
        // handle error
        // file not found exception, etc..
        return;
    }
    // If it is a JSON file, you might want to parse it
    var parsed = JSON.parse(language);
    console.log(parsed); // use `language` or `parsed` in your app
});

/* Load `myLanguage.txt` */
LanguageLoader.loadLanguage('myLanguage','txt',(error,language)=>{
    if(error)
    {
        // handle error
        // file not found exception, etc..
        return;
    }
    console.log(language); // use `language` in your app
});
```
Load a single language (Using Async/Await)

First parameter is the name of the file (without extension)

Second parameter is the extension
```js
import LanguageLoader from 'react-native-language-loader';

var getLanguage = async () => {
    await LanguageLoader.loadLanguageAsync('en','json')
    .then(language=>JSON.parse(language)) // You can skip this if it's not a json file
    .then(language=>{
        // use `language` in your app
        console.log(language)
    })
    .catch(error=>{
        // handle error
        // file not found exception, etc..
        console.log('ERROR',error);
    });
};

```
Load every language (Using callback)
```js
import LanguageLoader from 'react-native-language-loader';

/* Load every file from assets/languages */
LanguageLoader.loadLanguages((error,languages)=>{
    if(error)
    {
        // handle error
        // file not found exception, etc..
        return;
    }
    console.log(languages) // use `languages` in your app
    // or parse it
    var parsed = JSON.parse(languages);
    // `parsed` is a JSON Array, containing every file from from android/app/src/main/assets/languages
    console.log(parsed); // use `parsed` in your app
});
```
Load every language (Using Async/Await)
```js
import LanguageLoader from 'react-native-language-loader';

var getLanguages = async() => {
    await LanguageLoader.loadLanguagesAsync()
    .then(languages=>JSON.parse(languages)) // You can skip this
    .then(languages=>{
        // use `languages` in your app
        // `languages` is a JSON Array, containing every file from from android/app/src/main/assets/languages
        console.log(languages)
    })
    .catch(error=>{
        // handle error
        // file not found exception, etc..
        console.log('ERROR',error);
    });
};
```

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


## react-native-language-loader

## Features

Nothing fancy, just enables you to quickly load a single or multiple languages from your android/app/src/main/assets/languages folder (If you've placed your languages files in that folder).

## Installation

`$ npm install react-native-language-loader --save`

## Usage
Load a single language (Using callback)

First parameter is the name of the file (without extension)

Second parameter is the extension
```js
import LanguageLoader from 'react-native-language-loader';

LanguageLoader.loadLanguage('en','json',(error,language)=>{

    if(error)
    {
        // handle error
        // could be JSON parse exception, file not found exception, etc..
        return;
    }
    // if the extension is json (default), language will return a JSON object, otherwise a string
    // use `language` in your app (JSON Object or string)
    
});
```
Load a single language (Using Async/Await)

First parameter is the name of the file (without extension)

Second parameter is the extension
```js
import LanguageLoader from 'react-native-language-loader';

var getLanguage = async()=>{

    await LanguageLoader.loadLanguageAsync('en','json')
    .then(language=>{
       // if the extension is json (default), language will return a JSON object, otherwise a string
    })
    .catch(error=>{
        // handle error
        
    });
};

```
Load every language (Using callback)
```js
import LanguageLoader from 'react-native-language-loader';

LanguageLoader.loadLanguages((error,languages)=>{

    if(error)
    {
        // handle error
        // could be JSON parse exception, file not found exception, etc..
        return;
    }
    // languages is a JSON Array, containing every file from from android/app/src/main/assets/languages
    
});
```
Load every language (Using Async/Await)
```js
import LanguageLoader from 'react-native-language-loader';

var getLanguages = async()=>{

    await LanguageLoader.loadLanguagesAsync()
    .then(languages=>{
       // languages is a JSON Array, containing every file from from android/app/src/main/assets/languages
    })
    .catch(error=>{
        // handle error
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

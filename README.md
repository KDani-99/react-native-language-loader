
## react-native-language-loader

## Features

**Note**: Do not use any version below 1.2.3

From 1.2.3:
Works on **Android** & **ios**

***Recommended to use JSON files***

Nothing fancy, just enables you to quickly load a specific language file or multiple languages (which I needed for localization) from your `android/app/src/main/assets/languages` folder (android) or from your `Bundle.main` on ios (If you've placed your languages files in that folder).

**Note: (IOS)** If the extension is **JSON**, it returns a JSON string that you'll have to parse using ```js JSON.parse()```, otherwise returns an array of the content of files

On *Android*, it always returns a string, consider parsing it

(Example)
<img src="/screenshots/jsonResult.png" />

## Installation

`$ npm install react-native-language-loader --save`

### Android

1. Create a `languages` folder in `android/app/src/main/assets/`
2. Copy your language files to this folder

(Example)

<img src="/screenshots/fs.png"/>

### IOS

1. Open **Xcode** (from `ios/<yourAppName>.xcodeproj`)
2. Drag & Drop or copy your language files to your xcode project (make sure to select your project as the target when copying)

(3. You might have to run ```pod install``` in your `/ios/` folder)

(Example)

<img src="/screenshots/fs2.png"/>

## Usage

To load a specific language (Using callback)

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

First parameter is the extension of the files that you'd like to load

```js
import LanguageLoader from 'react-native-language-loader';

/* Load every file from assets/languages */
LanguageLoader.loadLanguages('json',(error,languages)=>{

    if(error)
    {
        // handle error
        // file not found exception, etc..
        return;
    }
    
    // languages is an array, even if no files could be found ( Empty array )
    
    console.log(languages) // use `languages` in your app
    // or parse it
    var parsed = JSON.parse(languages);
    // `parsed` is a JSON Array, containing every file from from android/app/src/main/assets/languages
    console.log(parsed); // use `parsed` in your app
    
});
```
Load every language (Using Async/Await)

First parameter is the extension of the files that you'd like to load

```js
import LanguageLoader from 'react-native-language-loader';

var getLanguages = async() => {

    await LanguageLoader.loadLanguagesAsync('json')
    .then(languages=>JSON.parse(languages)) // NOTE: If you have at least 1 file which is not JSON, skip this
    .then(languages=>{
        // languages is an array, even if no files could be found ( Empty array )
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

## Exceptions

IOS:

    `could_not_read_content`
    
    `file_not_found`
    
    `could_not_load_files`
    
Android:

    IOException (Java)

### Mostly automatic installation

`$ react-native link react-native-language-loader`

import LanguageLoader from 'react-native-language-loader';

/* Load `en.json` */
LanguageLoader.loadLanguage('en','json',(error,language)=>{
    if(error)
    {
        // handle error
        // file not found exception, etc..
        return;
    }
    // If it is a JSON file, you have to parse it
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
    console.log(parsed); // use `parsed` in your app
});

var loadLanguage = async () => {
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
var loadLanguages = async() => {
    await LanguageLoader.loadLanguagesAsync()
    .then(languages=>JSON.parse(languages)) // You can skip this
    .then(languages=>{
        // use `languages` in your app
        console.log(languages)
    })
    .catch(error=>{
        // handle error
        // file not found exception, etc..
        console.log('ERROR',error);
    });
};
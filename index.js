"use strict"
import {NativeModules} from 'react-native';

const {RNLanguageLoader} = NativeModules;

/**
 * Load a given language using async/await
 * @param {string} fileName - The name of the language file (without extension).
 * @param {string} extension Extension (default: json)
 * @returns Object (default: JSON (Language) | string)
 */
async function loadLanguageAsync(fileName = '',extension = 'json')
{
    return new Promise((resolve,reject)=>{
        RNLanguageLoader.loadLanguage(fileName,extension,(error,language)=>{
            if(error)
                return reject(error);
            try
            {
                if(extension === 'json')
                {
                    var parsed = JSON.parse(language);

                    return resolve(parsed);
                }
                return resolve(language);
            }
            catch(exception)
            {
                return reject(exception);
            }         
        });
    });
}
/**
 * Load a given language using callback
 * @param {string} fileName - The name of the language file (without extension).
 * @param {string} extension Extension (default: json)
 * @param {callback} callback Callback(error,language)
 */
function loadLanguage(fileName = '',extension = 'json',callback)
{
    return RNLanguageLoader.loadLanguage(fileName.toString(),extension.toString(),(error,language)=>{
        if(error)
            return callback(error,null);
        try
        {
            if(extension === 'json')
            {
                var parsed = JSON.parse(language);

                return callback(null,parsed);
            }
            /* return language as a string */
            return callback(null,language);
        }
        catch(exception)
        {
            return callback(exception,null);
        }
    });
}
/**
 * Load every file inside assets/languages
 * languages will be converted to a JSON Array
 * @param {callback} callback Callback(error,languages)
 */
function loadLanguages(callback)
{
    return RNLanguageLoader.loadLanguages((error,languages)=>{
        if(error)
            return callback(error,null);
        try
        {
            var parsed = JSON.parse(languages);
            return callback(null,parsed);
        }
        catch(exception)
        {
            return callback(exception,null);
        }
    });
}

export default {
    loadLanguage,
    loadLanguages,
    loadLanguageAsync
};
"use strict"
import {NativeModules} from 'react-native';

const {RNLanguageLoader} = NativeModules;

/**
 * Load every file from the assets/languages folder (Android), mainbundle(IOS)
 * @example
 * var loadLanguages = async () =>
 * {
 *  let languages = await LanguageLoader.loadLanguagesAsync('json');
 *  if(!languages)
 *  {
 *      // error!
 *      return;
 *  }
 *  // use `languages`
 * }
 * @async
 * @name loadLanguagesAsync
 * @typedef function
 * @param {string} extension - File extension (default: json)
 * @returns Promise
 * 
 * @throws IOS: `could_not_read_content` error | Android: IOException
 */
async function loadLanguagesAsync(extension = 'json')
{
    return RNLanguageLoader.loadLanguagesAsync(extension);
}

/**
 * Load a specific file from the assets/languages folder (Android), mainbundle(IOS)
 * @example
 * var loadLanguage = async () => 
 * {
 *  let language = await LanguageLoader.loadLanguageAsync('en','json');
 *  if(!language)
 *  {
 *      // error!
 *      return;
 *  }
 *  // use `language`
 * }
 * @async
 * @name loadLanguageAsync
 * @typedef function
 * @param {string} fileName - Name of the file (default: '')
 * @param {string} extension - File extension (default: json)
 * @returns Promise
 * 
 * @throws IOS: `file_not_found`, `could_not_read_content` error | Android: IOException
 */
async function loadLanguageAsync(fileName = '', extension = 'json')
{
    return RNLanguageLoader.loadLanguage(fileName,extension);
}
/**
 * Load a specific file from the assets/languages folder (Android), mainbundle(IOS)
 * @example
 * LanguageLoader.loadLanguage('en','json',(error,language)=>{
 *  if(error)
 *  {   
 *      // error!
 *      return;
 *  }
 *  // use `language`
 * });
 * @callback
 * @name loadLanguage
 * @typedef function
 * @param {string} fileName - Name of the file (default: '')
 * @param {string} extension - File extension (default: json)
 * @param {string} callback - Callback(error,language) (default: null)
 * @returns Callback
 * 
 * @throws IOS: `could_not_read_content`,`fil_not_found` error | Android: IOException
 */
function loadLanguage(fileName = '', extension = 'json',callback = null)
{
    return RNLanguageLoader.loadLanguage(fileName,extension,callback);
}
/**
 * Load every file from the assets/languages folder (Android), mainbundle(IOS)
 * @example
 * LanguageLoader.loadLanguages('json',(error,languages)=>{
 *  if(error)
 *  {
 *      // error!
 *      return;
 *  }
 *  // use `languages`
 * });
 * @callback
 * @name loadLanguages
 * @typedef function
 * @param {string} extension - File extension (default: json)
 * @param {string} callback - Callback(error,languages) (default: null)
 * @returns Callback
 * 
 * @throws IOS: `could_not_load_files` error | Android: IOException
 */
function loadLanguages(extension = 'json',callback = null)
{
    return RNLanguageLoader.loadLanguages(extension,callback);
}

export default 
{
    loadLanguage,
    loadLanguages,
    loadLanguageAsync,
    loadLanguagesAsync
}
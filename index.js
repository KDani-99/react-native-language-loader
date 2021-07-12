'use strict';
import {NativeModules} from 'react-native';

const {RNLanguageLoader} = NativeModules;

/**
 * Returns the content of a specific file from the assets/languages folder (Android), main bundle (IOS) with the given extension, asynchronously.
 *
 * @async
 * @method
 * @param {string} fileName - The name of the language file
 * @param {string} extension - The extension of the file
 * @returns {Promise<string>} - The content of a specific file
 * @throws IOS: `could_not_read_content` error | Android: IOException
 */
function loadLanguageAsync(fileName = '', extension = 'json') {
    return RNLanguageLoader.loadLanguageAsync(fileName, extension);
}

/**
 * Returns the content of every file from the assets/languages folder (Android), main bundle (IOS) with the given extension, asynchronously.
 *
 * @async
 * @method
 * @param extension
 * @returns {Promise<string[]>} - The content of every file with the given extension
 * @throws IOS: `could_not_read_content` error | Android: IOException
 */
function loadLanguagesAsync(extension = 'json') {
    return RNLanguageLoader.loadLanguagesAsync(extension);
}

/**
 * Returns the content of a specific file from the assets/languages folder (Android), main bundle (IOS).
 *
 * @method
 * @param {string} fileName - The name of the language file
 * @param {string} extension - The extension of the file
 * @param callback - function, Callback(error, language) (default: null)
 * @throws IOS: `could_not_read_content` error | Android: IOException
 */
function loadLanguage(fileName = '', extension = 'json', callback = null) {
    return RNLanguageLoader.loadLanguage(fileName, extension, callback);
}

/**
 * Returns the content of every file from the assets/languages folder (Android), main bundle(IOS)
 *
 * @method
 * @param {string} extension - The extension of the language files
 * @param callback - function, Callback(error, languages) (default: null)
 * @throws IOS: `could_not_read_content` error | Android: IOException
 */
function loadLanguages(extension = 'json', callback = null) {
    return RNLanguageLoader.loadLanguages(extension, callback);
}

export default {
    loadLanguage,
    loadLanguages,
    loadLanguageAsync,
    loadLanguagesAsync,
};

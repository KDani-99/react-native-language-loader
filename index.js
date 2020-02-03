"use strict"
import {NativeModules} from 'react-native';

const {RNLanguageLoader} = NativeModules;

/**
 * Load a given language using callback
 * @param {string} fileName - The name of the language file (without extension).
 * @param {string} extension Extension (default: json)
 * @param {callback} callback Callback(error,language)
 */
const loadLanguage = RNLanguageLoader.loadLanguage.bind(LL);
/**
 * Load a given language using async/await
 * @param {string} fileName - The name of the language file (without extension).
 * @param {string} extension Extension (default: json)
 * @returns String
 */
const loadLanguageAsync = RNLanguageLoader.loadLanguageAsync.bind(LL);
/**
 * Load every file inside assets/languages
 * languages will be converted to a JSON Array
 * @param {callback} callback Callback(error,languages)
 */
const loadLanguages = RNLanguageLoader.loadLanguages.bind(LL);
/**
 * Load every file inside assets/languages
 * languages will be converted to a JSON Array
 * @param {callback} callback Callback(error,languages)
 */
const loadLanguagesAsync = RNLanguageLoader.loadLanguagesAsync.bind(LL);

export default {
    loadLanguage,
    loadLanguages,
    loadLanguageAsync,
    loadLanguagesAsync
};
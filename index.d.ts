export declare type RNLanguageLoader = {
    /**
     * Returns the content of a specific file from the assets/languages folder (Android), main bundle (IOS).
     *
     * @method
     * @param {string} fileName - The name of the language file
     * @param {string} extension - The extension of the file
     * @param {function} callback, Callback(error, language) (default: null)
     * @throws IOS: `could_not_read_content` error | Android: IOException
     */
    loadLanguage(fileName: string, extension: string, callback: { (error: any, result: string): void }): void;
    /**
     * Returns the content of every file from the assets/languages folder (Android), main bundle(IOS)
     *
     * @method
     * @param {string} extension - The extension of the language files
     * @param {function} callback - function, Callback(error, languages) (default: null)
     * @throws IOS: `could_not_read_content` error | Android: IOException
     */
    loadLanguages(extension: string, callback: { (error: any, result: string[]): void }): void;
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
    loadLanguageAsync(fileName: string, extension: string): Promise<string>;
    /**
     * Returns the content of every file from the assets/languages folder (Android), main bundle (IOS) with the given extension, asynchronously.
     *
     * @async
     * @method
     * @param extension
     * @returns {Promise<string[]>} - The content of every file with the given extension
     * @throws IOS: `could_not_read_content` error | Android: IOException
     */
    loadLanguagesAsync(extension: string): Promise<string[]>;
};

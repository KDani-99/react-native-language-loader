package com.reactlibrary;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.ArrayList;
import java.io.*;

import com.facebook.react.bridge.Callback;

public class RNLanguageLoaderModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    RNLanguageLoaderModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "RNLanguageLoader";
    }

    private String getLanguage(String path) throws IOException {
        StringBuilder sb = new StringBuilder();

        InputStream is = reactContext.getAssets().open(path);
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String str;
        while ((str = br.readLine()) != null)
            sb.append(str);

        return sb.toString();
    }

    private String getLanguages(String path, String extension) throws IOException {
        ArrayList<String> ls = new ArrayList<String>();

        String[] list = reactContext.getAssets().list(path);
        for (String file : list) {
            String[] props = file.split("\\.");

            if (props.length > 0 && !props[props.length - 1].equals(extension)) continue;

            ls.add(this.getLanguage((path + "/" + file)));
        }

        return ls.toString();
    }

    @ReactMethod
    public void loadLanguage(String fileName, String extension, Callback callback) {
        if (extension == null || extension == "")
            extension = "json";
        try {
            String language = this.getLanguage("languages" + "/" + fileName + "." + extension);

            callback.invoke(null, language);
        } catch (IOException ex) {
            /* Throw exception */
            callback.invoke(ex.toString(), null);
        }
    }

    @ReactMethod
    public void loadLanguageAsync(String fileName, String extension, Promise promise) {
        if (extension == null || extension == "")
            extension = "json";
        try {
            String language = this.getLanguage("languages" + "/" + fileName + "." + extension);

            promise.resolve(language);
        } catch (IOException ex) {
            /* Throw exception */
            promise.reject(ex.toString());
        }
    }

    @ReactMethod
    public void loadLanguages(String extension, Callback callback) {
        try {
            String languages = getLanguages("languages", extension);
            callback.invoke(null, languages);
        } catch (IOException ex) {
            /* Throw exception */
            callback.invoke(ex.toString(), null);
        }
    }

    @ReactMethod
    public void loadLanguagesAsync(String extension, Promise promise) {
        try {
            String languages = getLanguages("languages", extension);
            promise.resolve(languages);

        } catch (IOException ex) {
            /* Throw exception */
            promise.reject(ex.toString());
        }
    }
}
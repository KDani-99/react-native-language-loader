
package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.ArrayList;
import java.io.*;

import com.facebook.react.bridge.Callback;

public class LanguageLoader extends ReactContextBaseJavaModule {
    
  private static ReactApplicationContext reactContext;

  LanguageLoader(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }
    @Override
    public String getName() {
        return "RNLanguageLoader";
    }

    private String getLanguage(String path) throws IOException
    {
        StringBuilder sb = new StringBuilder();

        InputStream is = reactContext.getAssets().open(path);
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String str;
        while ((str = br.readLine()) != null)
            sb.append(str);

        return sb.toString();
    }
    private String getLanguages(String path) throws IOException
    {
        ArrayList<String> ls = new ArrayList<String>();

        String [] list = reactContext.getAssets().list(path);
        for (String file : list) {
            ls.add(this.getLanguage((path + "/" + file)));
        }

        return ls.toString(); 
    }
    @ReactMethod
    public void loadLanguage(String fileName,String extension,Callback callback)
    {
        if(extension == null || extension == "")
            extension = "json";
        try
        {
            String language = this.getLanguage("languages"+"/"+fileName+"."+extension);
            callback.invoke(null,language);
        }
        catch (IOException ex)
        {
            /* Throw exception */
            callback.invoke(ex.toString(),null);
        }
    }
    @ReactMethod
    public void loadLanguages(Callback callback)
    {
        try
        {
            String languages = getLanguages("languages");
            callback.invoke(null,languages);
        }
        catch (IOException ex)
        {
            /* Throw exception */
            callback.invoke(ex.toString(),null);
        }
    }
}
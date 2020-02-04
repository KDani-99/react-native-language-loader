
#import "RNLanguageLoader.h"

#import <Foundation/Foundation.h>

@implementation RNLanguageLoader

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(loadLanguage:(NSString *)fileName type:(NSString *)type callback:(RCTResponseSenderBlock)callback)
{
  
  type = [type lowercaseString];
  
  NSString * res = [[NSBundle mainBundle] pathForResource:fileName ofType:type];
  
  if([[NSFileManager defaultManager] fileExistsAtPath:res])
  {
    NSString * content = [NSString stringWithContentsOfFile:res encoding:NSUTF8StringEncoding error:nil];
    
    if(!content)
    {
      callback(@[@"could_not_read_content",[NSNull null]]);
      return;
    }
    
    callback(@[[NSNull null], content]);
  }
  else
  {
    callback(@[@"file_not_found",[NSNull null]]);
  }
  
}

RCT_EXPORT_METHOD(loadLanguageAsync:(NSString *)fileName type:(NSString *)type resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  type = [type lowercaseString];
  
  NSString * res = [[NSBundle mainBundle] pathForResource:fileName ofType:type];
  
  if([[NSFileManager defaultManager] fileExistsAtPath:res])
  {
    NSString * content = [NSString stringWithContentsOfFile:res encoding:NSUTF8StringEncoding error:nil];
    
    if(!content)
    {
      NSError * error;
      reject(@"could_not_read_content",@"Could not read the content of the file",error);
      return;
    }
    
    resolve(content);
  }
  else
  {
    NSError * error;
    reject(@"file_not_found",@"The specified file could not be found in the bundle",error);
  }
}

RCT_EXPORT_METHOD(loadLanguagesAsync:(NSString *)type resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  type = [type lowercaseString];
  
  NSArray * files = [[NSBundle mainBundle] pathsForResourcesOfType:type inDirectory:nil];
  
  NSMutableArray * result = [NSMutableArray array];
  
  for (NSString * file in files)
  {
    NSString * content = [NSString stringWithContentsOfFile:file encoding:NSUTF8StringEncoding error:nil];
    
    if(!content)
    {
      NSError * error;
      reject(@"could_not_read_content",@"Could not read the content of the file",error);
      return;
    }
    
    [result addObject:content];
  }
  
  if([type isEqualToString:@"json"])
  {
    NSString * converted = [[result valueForKey:@"description"] componentsJoinedByString:@","];
    converted = [@"[" stringByAppendingString:converted];
    converted = [converted stringByAppendingString:@"]"];
    resolve(converted);
  }
  else
    resolve(result);
  
}

RCT_EXPORT_METHOD(loadLanguages:(NSString *)type callback:(RCTResponseSenderBlock)callback)
{
  type = [type lowercaseString];
  
  NSArray * files = [[NSBundle mainBundle] pathsForResourcesOfType:type inDirectory:nil];
  
  NSMutableArray * result = [NSMutableArray array];
  
  for (NSString * file in files)
  {
    NSString * content = [NSString stringWithContentsOfFile:file encoding:NSUTF8StringEncoding error:nil];
    
    if(!content)
    {
      callback(@[@"could_not_load_files",[NSNull null]]);
      return;
    }
    
    [result addObject:content];
  }
  
  if([type isEqualToString:@"json"])
  {
    NSString * converted = [[result valueForKey:@"description"] componentsJoinedByString:@","];
    converted = [@"[" stringByAppendingString:converted];
    converted = [converted stringByAppendingString:@"]"];
    
   callback(@[[NSNull null],converted]);
  }
  else
    callback(@[[NSNull null],result]);
  
}

@end


Pod::Spec.new do |s|
  s.name         = "RNLanguageLoader"
  s.version      = "1.0.0"
  s.summary      = "RNLanguageLoader"
  s.description  = <<-DESC
                  RNLanguageLoader
                   DESC
  s.homepage     = "https://github.com/KDani-99/react-native-language-loader"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "kdani-99" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/author/RNLanguageLoader.git", :tag => "master" }
  s.source_files  = "ios/**/*.{h,m}"
  s.requires_arc = true
  s.dependency "React"
end

  
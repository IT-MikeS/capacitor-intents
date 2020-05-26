
  Pod::Spec.new do |s|
    s.name = 'CapacitorIntents'
    s.version = '0.0.1'
    s.summary = 'Simple intent tools for Capacitor on Android'
    s.license = 'MIT'
    s.homepage = 'none'
    s.author = 'IT-MikeS'
    s.source = { :git => 'none', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end
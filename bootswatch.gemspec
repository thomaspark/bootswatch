require "json"
$package = JSON.parse(File.read(File.expand_path("package.json", __dir__)))

Gem::Specification.new do |s|
  s.name        = "bootswatch"
  s.version     = $package["version"].tr("+", ".")
  s.author      = $package["author"]
  s.homepage    = $package["homepage"]
  s.summary     = $package["description"]
  s.license     = $package["license"]

  s.files = Dir["{dist}/**/*", "LICENSE", "README.md", "package.json"]
  s.require_paths = ["dist"]
end

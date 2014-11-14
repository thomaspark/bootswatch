# Bootstrap for Sass [![Gem Version](https://badge.fury.io/rb/bootstrap-sass.svg)](http://badge.fury.io/rb/bootstrap-sass) [![Bower Version](https://badge.fury.io/bo/bootstrap-sass-official.svg)](http://badge.fury.io/bo/bootstrap-sass-official) [![Build Status](http://img.shields.io/travis/twbs/bootstrap-sass.svg)](http://travis-ci.org/twbs/bootstrap-sass)

`bootstrap-sass` is a Sass-powered version of [Bootstrap](http://github.com/twbs/bootstrap), ready to drop right into your Sass powered applications.

## Installation

Please see the appropriate guide for your environment of choice:

* [Ruby on Rails](#a-ruby-on-rails).
* [Compass](#b-compass-without-rails) not on Rails.
* [Bower](#c-bower).

### a. Ruby on Rails

`bootstrap-sass` is easy to drop into Rails with the asset pipeline.

In your Gemfile you need to add the `bootstrap-sass` gem, and ensure that the `sass-rails` gem is present - it is added to new Rails applications by default.

```ruby
gem 'bootstrap-sass', '~> 3.3.1'
gem 'sass-rails', '>= 3.2'
```

It is also recommended to use [Autoprefixer](https://github.com/ai/autoprefixer-rails) with Bootstrap
to add browser vendor prefixes automatically. Simply add the gem:

```ruby
gem 'autoprefixer-rails'
```

`bundle install` and restart your server to make the files available through the pipeline.

Import Bootstrap styles in `app/assets/stylesheets/application.css.scss`:

```scss
// "bootstrap-sprockets" must be imported before "bootstrap" and "bootstrap/variables"
@import "bootstrap-sprockets";
@import "bootstrap";
```

`bootstrap-sprockets` must be imported before `bootstrap` for the icon fonts to work.

Make sure the file has `.css.scss` extension (or `.css.sass` for Sass syntax). If you have just generated a new Rails app,
it may come with a `.css` file instead. If this file exists, it will be served instead of Sass, so remove it:

```console
$ rm app/assets/stylesheets/application.css
```

Do not use `//= require` in Sass or your other stylesheets will not be [able to access][antirequire] the Bootstrap mixins or variables.

Require Bootstrap Javascripts in `app/assets/javascripts/application.js`:

```js
//= require jquery
//= require bootstrap-sprockets
```

#### Bower with Rails

When using [bootstrap-sass Bower package](#c-bower) instead of the gem in Rails, configure assets in `config/application.rb`:

```ruby
# Bower asset paths
root.join('vendor', 'assets', 'bower_components').to_s.tap do |bower_path|
  config.sass.load_paths << bower_path
  config.assets.paths << bower_path
end
# Precompile Bootstrap fonts
config.assets.precompile << %r(bootstrap-sass/assets/fonts/bootstrap/[\w-]+\.(?:eot|svg|ttf|woff)$)
# Minimum Sass number precision required by bootstrap-sass
::Sass::Script::Number.precision = [10, ::Sass::Script::Number.precision].max
```

Replace Bootstrap `@import` statements in `application.css.scss` with:

```scss
$icon-font-path: "bootstrap-sass/assets/fonts/bootstrap/";
@import "bootstrap-sass/assets/stylesheets/bootstrap-sprockets";
@import "bootstrap-sass/assets/stylesheets/bootstrap";
```

Replace Bootstrap `require` directive in `application.js` with:

```js
//= require bootstrap-sass/assets/javascripts/bootstrap-sprockets
```

#### Rails 4.x

Please make sure `sprockets-rails` is at least v2.1.4.

#### Rails 3.2.x

Rails 3.2 is [no longer maintained for bugfixes](http://guides.rubyonrails.org/maintenance_policy.html), and you should upgrade as soon as possible.

Starting with bootstrap-sass v3.1.1.1, due to the structural changes from upstream you will need these
backported asset pipeline gems on Rails 3.2. There is more on why this is necessary in
https://github.com/twbs/bootstrap-sass/issues/523 and https://github.com/twbs/bootstrap-sass/issues/578.

```ruby
gem 'sprockets-rails', '=2.0.0.backport1'
gem 'sprockets', '=2.2.2.backport2'
gem 'sass-rails', github: 'guilleiguaran/sass-rails', branch: 'backport'
```

### b. Compass without Rails

Install the gem
```sh
gem install bootstrap-sass
```

If you have an existing Compass project:

```ruby
# config.rb:
require 'bootstrap-sass'
```

```console
$ bundle exec compass install bootstrap
```

If you are creating a new Compass project, you can generate it with bootstrap-sass support:

```console
$ bundle exec compass create my-new-project -r bootstrap-sass --using bootstrap
```

or, alternatively, if you're not using a Gemfile for your dependencies:

```console
$ compass create my-new-project -r bootstrap-sass --using bootstrap
```

This will create a new Compass project with the following files in it:

* [styles.sass](/templates/project/styles.sass) - main project Sass file, imports Bootstrap and variables.
* [_bootstrap-variables.sass](/templates/project/_bootstrap-variables.sass) - all of Bootstrap variables, override them here.

Some bootstrap-sass mixins may conflict with the Compass ones.
If this happens, change the import order so that Compass mixins are loaded later.

### c. Bower

Using bootstrap-sass as a Bower package is still being tested. It is compatible with node-sass 0.8.3+. You can install it with:

```console
$ bower install bootstrap-sass-official
```

`bootstrap-sass` is taken so make sure you use the command above.

Sass, JS, and all other assets are located at [assets](/assets).

By default, `bower.json` main field list only the main `bootstrap.scss` and all the static assets (fonts and JS).
This is compatible by default with asset managers such as [wiredep](https://github.com/taptapship/wiredep).

#### Node.js Mincer

If you use [mincer][mincer] with node-sass, import bootstrap into like so:

In `application.css.ejs.scss` (NB **.css.ejs.css**):

```scss
// Import mincer asset paths helper integration
@import "bootstrap-mincer";
@import "bootstrap";
```

In `application.js`:

```js
//= require bootstrap-sprockets
```

See also this [example manifest.js](/test/dummy_node_mincer/manifest.js) for mincer.


### Configuration

#### Sass

By default all of Bootstrap is imported.

You can also import components explicitly. To start with a full list of modules copy
[`_bootstrap.scss`](assets/stylesheets/_bootstrap.scss) file into your assets as `_bootstrap-custom.scss`.
Then comment out components you do not want from `_bootstrap-custom`.
In the application Sass file, replace `@import 'bootstrap'` with:

```scss
@import 'bootstrap-custom';
```

#### Sass: Number Precision

bootstrap-sass [requires](https://github.com/twbs/bootstrap-sass/issues/409) minimum [Sass number precision][sass-precision] of 10 (default is 5).

Precision is set for Rails and Compass automatically.
When using ruby Sass compiler standalone or with the Bower version you can set it with:

```ruby
::Sass::Script::Number.precision = [10, ::Sass::Script::Number.precision].max
```

Note that libsass and node-sass do not currently support the precision option, due to an open bug ([bug #364](https://github.com/sass/libsass/issues/364)) in libsass.


#### Sass: Autoprefixer

Using [Autoprefixer][autoprefixer] with Bootstrap is recommended.
[Autoprefixer][autoprefixer] adds vendor prefixes to CSS rules using values from [Can I Use](http://caniuse.com/).

#### JavaScript

[`assets/javascripts/bootstrap.js`](/assets/javascripts/bootstrap.js) contains all of Bootstrap JavaScript,
concatenated in the [correct order](/assets/javascripts/bootstrap-sprockets.js).


#### JavaScript with Sprockets or Mincer

If you use Sprockets or Mincer, you can require `bootstrap-sprockets` instead to load the individual modules:

```js
// Load all Bootstrap JavaScript
//= require bootstrap-sprockets
```

You can also load individual modules, provided you also require any dependencies.
You can check dependencies in the [Bootstrap JS documentation][jsdocs].

```js
//= require bootstrap/scrollspy
//= require bootstrap/modal
//= require bootstrap/dropdown
```

#### Fonts

The fonts are referenced as:

```scss
"#{$icon-font-path}#{$icon-font-name}.eot"
```

`$icon-font-path` defaults to `bootstrap/` if asset path helpers are used, and `../fonts/bootstrap/` otherwise.

When using bootstrap-sass with Compass, Sprockets, or Mincer, you **must** import the relevant path helpers before Bootstrap itself, for example:

```scss
@import "bootstrap-compass";
@import "bootstrap";
```

## Usage

### Sass

Import Bootstrap into a Sass file (for example, application.css.scss) to get all of Bootstrap's styles, mixins and variables!

```scss
@import "bootstrap";
```

You can also include optional bootstrap theme:

```scss
@import "bootstrap/theme";
```

The full list of bootstrap variables can be found [here](http://getbootstrap.com/customize/#less-variables). You can override these by simply redefining the variable before the `@import` directive, e.g.:

```scss
$navbar-default-bg: #312312;
$light-orange: #ff8c00;
$navbar-default-color: $light-orange;

@import "bootstrap";
```

## Version

`bootstrap-sass` version reflects the upstream version, with an additional number for Sass-specific changes.

Always refer to [CHANGELOG.md](/CHANGELOG.md) when upgrading.

---

## Development and Contributing

If you'd like to help with the development of bootstrap-sass itself, read this section.

### Upstream Converter

Keeping bootstrap-sass in sync with upstream changes from Bootstrap used to be an error prone and time consuming manual process. With Bootstrap 3 we have introduced a converter that automates this.

**Note: if you're just looking to *use* Bootstrap 3, see the [installation](#installation) section above.**

Upstream changes to the Bootstrap project can now be pulled in using the `convert` rake task.

Here's an example run that would pull down the master branch from the main [twbs/bootstrap](https://github.com/twbs/bootstrap) repo:

    rake convert

This will convert the latest LESS to Sass and update to the latest JS.
To convert a specific branch or version, pass the branch name or the commit hash as the first task argument:

    rake convert[e8a1df5f060bf7e6631554648e0abde150aedbe4]

The latest converter script is located [here][converter] and does the following:

* Converts upstream bootstrap LESS files to its matching SCSS file.
* Copies all upstream JavaScript into `assets/javascripts/bootstrap`, an Sprockets manifest at `assets/javascripts/bootstrap-sprockets.js`, and a concatenation at `assets/javascripts/bootstrap.js`.
* Copies all upstream font files into `assets/fonts/bootstrap`.
* Sets `Bootstrap::BOOTSTRAP_SHA` in [version.rb][version] to the branch sha.

This converter fully converts original LESS to SCSS. Conversion is automatic but requires instructions for certain transformations (see converter output).
Please submit GitHub issues tagged with `conversion`.

## Credits

bootstrap-sass has a number of major contributors:

<!-- feel free to make these link wherever you wish -->
* [Thomas McDonald](https://twitter.com/thomasmcdonald_)
* [Tristan Harward](http://www.trisweb.com)
* Peter Gumeson
* [Gleb Mazovetskiy](https://github.com/glebm)

and a [significant number of other contributors][contrib].

## You're in good company
bootstrap-sass is used to build some awesome projects all over the web, including
[Diaspora](http://diasporaproject.org/), [rails_admin](https://github.com/sferik/rails_admin),
Michael Hartl's [Rails Tutorial](http://railstutorial.org/), [gitlabhq](http://gitlabhq.com/) and
[kandan](http://kandanapp.com/).

[converter]: https://github.com/twbs/bootstrap-sass/blob/master/tasks/converter/less_conversion.rb
[version]: https://github.com/twbs/bootstrap-sass/blob/master/lib/bootstrap-sass/version.rb
[contrib]: https://github.com/twbs/bootstrap-sass/graphs/contributors
[antirequire]: https://github.com/twbs/bootstrap-sass/issues/79#issuecomment-4428595
[jsdocs]: http://getbootstrap.com/javascript/#transitions
[sass-precision]: http://sass-lang.com/documentation/Sass/Script/Number.html#precision-class_method
[mincer]: https://github.com/nodeca/mincer
[autoprefixer]: https://github.com/ai/autoprefixer

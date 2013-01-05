Create your own swatch
======================

1. Download Bootstrap
------
Download and unpack [Bootswatch](https://github.com/thomaspark/bootswatch/tags). In terminal, navigate to `swatchmaker/` and run the command `make bootstrap` to update to the latest version of Bootstrap or `make sass-bootstrap` to get the latest version of sass-twitter-bootstrap.


2. Install LESS or SASS
------
If you haven't already, install LESS to your machine via NPM. More information on that here: http://lesscss.org/#-server-side-usage
If you want to use SASS, install SASS to you machine via gem. More information on that here: http://sass-lang.com/

3. Customize Bootstrap
------
Make your customizations to the two files found in the `swatch` directory, `variables.less` and `bootswatch.less` (or `_variables.scss` and `_bootswatch.scss` for sass).


4. Build Customized Bootstrap
------
In the `swatchmaker` directory, run `make bootswatch` (or `make sass-bootswatch`). The compiled CSS files will be created in the `swatch` directory.

You can run the watcher to automatically build Bootstrap whenever changes are saved with `ruby watcher.rb`. Requires `gem install directory_watcher`.


5. Reset Bootstrap
------
If you want to reset `variables.less` and `bootswatch.less` to defaults, run `make default` or `make sass-default`.
Create your own swatch
======================

1. Download Bootstrap
------
Download the latest Bootstrap source from https://github.com/twitter/bootstrap/downloads. Unpack it to the `swatchmaker` directory and rename the folder `bootstrap`.

This can be done automatically by running `make bootstrap`.

2. Install LESS
------
If you haven't already, install LESS to your machine via NPM. More information on that here: http://lesscss.org/#-server-side-usage

3. Customize Bootstrap
------
Make your customizations to the two files found in the `swatch` directory, `variables.less` and `bootswatch.less`.


4. Build Customized Bootstrap
------
In terminal, navigate to the `swatchmaker` directory and run `make bootswatch`. The compiled CSS files will be created in the `swatch` directory.

You can run the watcher to automatically build Bootstrap whenever changes are saved with `ruby watcher.rb`. Requires `gem install directory_watcher`.

5. Reset Bootstrap
------
If you want to reset `variables.less` and `bootswatch.less` to defaults, run `make default`.
Create your own swatch
======================

Step 1
------
Download the latest Bootstrap source from https://github.com/twitter/bootstrap/downloads. Unpack it to the `swatchmaker` directory and rename the folder `bootstrap`.

This can be done automatically by running `make bootstrap`.

Step 2
------
Make your customizations to the two files found in the `swatch` directory, `variables.less` and `bootswatch.less`.

Step 3a
------
If you haven't already, install LESS to your machine via NPM. More information on that here: http://lesscss.org/#-server-side-usage

Step 3b
------
In terminal, navigate to the `swatchmaker` directory and run `make bootswatch`. The compiled CSS files will be created in the `swatch` directory.
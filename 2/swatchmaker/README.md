Create your own swatch
======================

1. Download Bootswatch
------
Download or clone [Bootswatch](https://github.com/thomaspark/bootswatch).


2. Install Bootstrap
------
In terminal, navigate to `/bootswatch/swatchmaker/` and run the command `make bootstrap` to download the latest version of Bootstrap.


3. Install Bootstrap Dependencies
------
If you haven't before, [install npm](https://npmjs.org/). Next, navigate to `/bootswatch/swatchmaker/bootstrap/` and type `npm install` to locally install Bootstrap dependencies (uglify-js, jshint, recess, connect, hogan.js).


4. Customize Bootstrap
------
Make your customizations to the two files found in `/bootswatch/swatchmaker/swatch/`: `variables.less` and `bootswatch.less`. You can also copy over the less files from an existing theme and modify them.


5. Build Customized Bootstrap
------
In `/bootswatch/swatchmaker/`, run `make bootswatch`. The compiled CSS files will be created in `/bootswatch/swatchmaker/swatch/`.

You can run the watcher to automatically build Bootstrap whenever changes are saved with `make watcher` (Requires `gem install directory_watcher`).


6. Reset Bootstrap
------
If you want to reset `variables.less` and `bootswatch.less` to defaults, run `make default`.
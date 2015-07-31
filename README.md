Bootswatch
==========

Bootswatch is a collection of free themes for [Bootstrap](http://getbootstrap.com/). Check it out at [bootswatch.com](http://bootswatch.com).

Usage
-----
Download the `bootstrap.min.css` file associated with a theme and replace Bootstrap's default stylesheet.

The themes are also hosted on [BootstrapCDN](http://www.bootstrapcdn.com/bootswatch/).

 Rails users should check out:

* [twitter-bootswatch-rails](https://github.com/scottvrosenthal/twitter-bootswatch-rails) if using _LESS_.
* [bootswatch-rails](https://github.com/maxim/bootswatch-rails) if using _SASS_.


Customization
------
Bootswatch is open source and you’re welcome to modify the themes.

Each theme consists of two LESS files. `variables.less`, which is included by default in Bootstrap, allows you to customize [these settings](http://getbootstrap.com/customize/#less-variables). `bootswatch.less` introduces more extensive structural changes.

These files are also available in SASS.

Check out the [Help page](http://bootswatch.com/help/) for more details on building your own theme.

API
-----

A simple API is available for integrating your platform with Bootswatch. Send your request to `http://api.bootswatch.com/3/`.

The swatch objects are returned in an array called `themes`, each one with the following properties:  `name`, `description`, `preview`, `thumbnail`, `css`, `cssMin`, `less`, and `lessVariables`.

More info at http://bootswatch.com/help/#api

Author
------
Thomas Park

+ http://github.com/thomaspark
+ http://thomaspark.co

Thanks
------
[Mark Otto](https://github.com/mdo) and [Jacob Thornton](https://github.com/fat) for [Bootstrap](https://github.com/twbs/bootstrap).

[Jenil Gogari](http://www.jgog.in/) for his contributions to the Flatly theme.

[James Taylor](https://github.com/jostylr) for [cors-lite](https://github.com/jostylr/cors-lite).

[Corey Sewell](https://github.com/cjsewell) for SASS conversion.


Copyright and License
----
Copyright 2014 Thomas Park

Code released under the MIT License.

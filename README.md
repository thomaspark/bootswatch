Bootswatch
==========

Bootswatch is a collection of free themes for [Bootstrap](http://getbootstrap.com/). Check it out at [bootswatch.com](http://bootswatch.com).

Usage
-----
Download the `bootstrap.min.css` file associated with a theme and replace Bootstrap's default stylesheet.

The themes are also hosted on [BootstrapCDN](http://www.bootstrapcdn.com/).

Rails users should check out [twitter-bootswatch-rails](https://github.com/scottvrosenthal/twitter-bootswatch-rails).


Customization
------
Bootswatch is open source and you’re welcome to modify the themes.

Each theme consists of two LESS files. `variables.less`, which is included by default in Bootstrap, allows you to customize [these settings](http://getbootstrap.com/customize/#less-variables). `bootswatch.less` introduces more extensive structural changes.

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
+ http://thomaspark.me

Thanks
------
[Mark Otto](http://github.com/markdotto) and [Jacob Thornton](http://github.com/fat) for [Bootstrap](https://github.com/twitter/bootstrap).

[Jenil Gogari](http://www.jgog.in/) for his contributions to the Flatly theme.

[James Taylor](http://github.com/jostylr) for [cors-lite](https://github.com/jostylr/cors-lite).


Copyright and License
----
Copyright 2014 Thomas Park

Code released under the MIT License.
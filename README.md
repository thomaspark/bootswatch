Bootswatch
==========

Bootswatch is a collection of free themes for [Bootstrap](http://getbootstrap.com/). Check it out at [bootswatch.com](http://bootswatch.com).

Usage
-----
Head over to [Bootswatch](http://bootswatch.com) and download the `bootstrap.min.css` file associated with a theme. Replace Bootstrap's stylesheet with this file.

The themes are also hosted on [BootstrapCDN](http://www.bootstrapcdn.com/).

For use with Rails, check out [bootswatch-rails](https://github.com/maxim/bootswatch-rails) (Sass) and [twitter-bootswatch-rails](https://github.com/scottvrosenthal/twitter-bootswatch-rails) (LESS). For use with a Yeoman app or with Bower check out [bootswatch-scss](https://github.com/nrub/bootswatch-scss).


Customization
------
Bootswatch is an open source project, and you’re welcome to fork and modify the themes.

Each raw theme consists of two LESS files. One is `variables.less`, which is included by default in Bootstrap and allows you to customize [these settings](http://getbootstrap.com/customize/#less-variables). The other is called `bootswatch.less` and introduces more extensive structural changes.

Check out the [Help page](http://bootswatch.com/help/) for more details on building your own theme.

API
-----

A simple API is available for integrating your platform with Bootswatch.

The swatch objects are housed in an array called `themes`, and each swatch has the following properties:  `name`, `description`, `preview`, `thumbnail`, `css`, `cssMin`, `less`, and `lessVariables`.

CORS and JSONP are supported. Send your request to `http://api.bootswatch.com/3/`.

More info at http://bootswatch.com/help/#api

Author
------
[Thomas Park](http://github.com/thomaspark)

+ http://thomaspark.me

Thanks
------
[Mark Otto](http://github.com/markdotto) and [Jacob Thornton](http://github.com/fat) for [Bootstrap](https://github.com/twitter/bootstrap).

[Jenil Gogari](http://www.jgog.in/) for his contributions to the Flatly theme.

[James Taylor](http://github.com/jostylr) for [cors-lite](https://github.com/jostylr/cors-lite).

[Gerald Hiller](https://twitter.com/geraldhiller) for the favicon.


Copyright and License
----
Copyright 2013 Thomas Park

Code released under the MIT License.
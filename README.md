Bootswatch
==========

Bootswatch is a collection of free themes for [Twitter Bootstrap](http://twitter.github.com/bootstrap/). Check it out at [bootswatch.com](http://bootswatch.com).

Usage
-----
Head over to [Bootswatch](http://bootswatch.com) and download the `bootstrap.min.css` file associated with a theme. Replace Bootstrap's stylesheet with this file.

The themes are also hosted on [BootstrapCDN](http://www.bootstrapcdn.com/).

For use with Rails, check out [bootswatch-rails](https://github.com/maxim/bootswatch-rails) (Sass) and [twitter-bootswatch-rails](https://github.com/scottvrosenthal/twitter-bootswatch-rails) (LESS). For use with a Yeoman app or with Bower check out [bootswatch-scss](https://github.com/nrub/bootswatch-scss).


Customization
------
Bootswatch is an open source project, and you’re welcome to fork and modify the themes.

Each raw theme consists of two LESS files. One is `variables.less`, which is included by default in Bootstrap and allows you to customize [these settings](http://twitter.github.io/bootstrap/customize.html#variables). The other is called `bootswatch.less` and introduces more extensive structural changes.

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

[James Taylor](http://github.com/jostylr) for [cors-lite](https://github.com/jostylr/cors-lite).

[Zack Maril](http://github.com/zmaril) for [bootswatch/swatchmaker/watcher.rb](https://github.com/thomaspark/bootswatch/blob/master/swatchmaker/watcher.rb).

[Gerald Hiller](https://twitter.com/geraldhiller) for the favicon.


Copyright and License
----
Copyright 2013 Thomas Park

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

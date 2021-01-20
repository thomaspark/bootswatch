Bootswatch
==========

Bootswatch is a collection of free themes for [Bootstrap](https://getbootstrap.com/2.3.2/). Check it out at [bootswatch.com](https://bootswatch.com).

Usage
-----
Head over to [Bootswatch](https://bootswatch.com) and download the `bootstrap.min.css` file associated with a theme. Replace Bootstrap's stylesheet with this file.

The themes are also hosted on [jsDelivr](https://www.jsdelivr.com/package/npm/bootswatch).

For use with Rails, check out [bootswatch-rails](https://github.com/maxim/bootswatch-rails) (Sass) and [twitter-bootswatch-rails](https://github.com/scottvrosenthal/twitter-bootswatch-rails) (LESS). For use with a Yeoman app or with Bower check out [bootswatch-scss](https://github.com/nrub/bootswatch-scss).


Customization
------
Bootswatch is an open source project, and you’re welcome to modify the themes further. If you’re interested, fork or follow the GitHub repository. The files of interest are in the `gh-pages` branch.

Each raw theme consists of two LESS files. One is `variables.less`, which is included by default in Bootstrap and allows you to customize [these settings](https://getbootstrap.com/2.3.2/customize.html#variables). The other is called `bootswatch.less` and introduces more extensive structural changes.

Check out the README in the [swatchmaker directory](https://github.com/thomaspark/bootswatch/tree/master/docs/2/swatchmaker) for step-by-step instructions on building your own swatch.

API
-----

A simple API is available for integrating your platform with Bootswatch.

The swatch objects are housed in an array called `themes`, and each swatch has the following properties:  `name`, `description`, `preview`, `thumbnail`, `css`, `css-min`, `less`, and `less-variables`.

CORS and JSONP are supported. Send your request to `https://bootswatch.com/api/2.json`.

A simple demo, using mustache.js for templating: https://jsbin.com/hiwuxilere/1/edit

Feedback
------
Please send feedback to thomas@thomaspark.me. For more information, visit https://thomaspark.co/2012/02/introducing-bootswatch/.

Author
------
[Thomas Park](https://github.com/thomaspark)

+ https://thomaspark.co

Thanks
------
[Mark Otto](https://github.com/markdotto) and [Jacob Thornton](https://github.com/fat) for [Bootstrap](https://github.com/twitter/bootstrap).

[James Taylor](https://github.com/jostylr) for [cors-lite](https://github.com/jostylr/cors-lite).

[Zack Maril](https://github.com/zmaril) for [bootswatch/swatchmaker/watcher.rb](https://github.com/thomaspark/bootswatch/blob/master/docs/2/swatchmaker/watcher.rb).

[Gerald Hiller](https://twitter.com/geraldhiller) for the favicon.


Copyright and License
----
Copyright 2012 Thomas Park

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

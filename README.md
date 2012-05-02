Bootswatch
==========

Bootswatch is a collection of free themes for your [Twitter Bootstrap](http://twitter.github.com/bootstrap/) site. Check it out at [bootswatch.com](http://bootswatch.com).

How do I use Bootswatch?
-----
Head over to [Bootswatch](http://bootswatch.com) and download the `bootswatch.min.css` file associated with a swatch.

In Bootstrap’s CSS directory, you’ll find a stylesheet in full (`bootstrap.css`) and minified (`bootstrap.min.css`) forms. Rename them or move them to a safe place. Then drop in the new CSS file and check that your HTML points to it. If you ever change your mind, simply drop in another swatch or switch back to the original.

How do I extend Bootswatch?
------
Bootswatch is an open source project, and you’re welcome to modify the swatches further or create your own. If you’re interested, fork or follow the GitHub repository. The files of interest are in the `gh-pages` branch.

Each raw swatch consists of two LESS files. One is `variables.less`, which is included by default in Bootstrap and allows you to customize [these settings](http://twitter.github.com/bootstrap/less.html#variables). The other is a new file called `bootswatch.less` that introduces more extensive structural changes.

Check out the README in the `swatchmaker` directory for step-by-step instructions for building your own swatches.

How do I plug into Bootswatch?
-----

A simple API is available for integrating your site or app with Bootswatch.

The swatches are housed in an array called `themes`, and each swatch has the following properties:  `name`, `description`, `preview`, `thumbnail`, `css`, `css-min`, `less`, and `less-variables`.

CORS and JSONP are supported. Send your request to `http://simplejsonp.nodester.com/bootswatch/`

A simple demo, using mustache.js for templating: http://jsbin.com/epadoh/1/edit


Feedback
------
Please send feedback to thomas@thomaspark.me. For more information, visit http://thomaspark.me/2012/02/introducing-bootswatch/.

Author
------
[Thomas Park](http://github.com/thomaspark)

+ http://thomaspark.me
+ http://twitter.com/thomashpark

Thanks
------
[Mark Otto](http://github.com/markdotto) and [Jacob Thornton](http://github.com/fat) for Bootstrap.

[James Taylor](http://github.com/jostylr) for simplejsonp.


Copyright and License
----
Copyright 2012 Thomas Park

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
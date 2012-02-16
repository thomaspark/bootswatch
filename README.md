Bootswatch
==========

Bootswatch is a collection of themed swatches that you can download for free and drop into your [Bootstrap](http://twitter.github.com/bootstrap/) site. Check it out at [bootswatch.com[(http://bootswatch.com).

So how do I use Bootswatch?
-----
Head over to [Bootswatch](http://bootswatch.com) and pick a swatch. Download the `bootswatch.min.css` file associated with it.

In Bootstrap’s CSS directory, you’ll find a stylesheet in full (`bootstrap.css`) and minified (`bootstrap.min.css`) forms. Rename them or move them to a safe place. Then drop in the new CSS file and check that your HTML points to it. If you ever change your mind, simply drop in another swatch or switch back to the original.

What if I want to extend Bootswatch?
------
Bootswatch is an open source project, and you’re welcome to modify the swatches further or create your own. If you’re interested, fork or follow the GitHub repository.

Each raw swatch consists of two LESS files. One is variables.less, which is included by default in Bootstrap and allows you to customize these settings. The other is a new file called bootswatch.less that introduces more extensive changes.

First, add these two files to Bootstrap’s own LESS files. You’ll be overwriting the default variables.less.

Next, open up bootstrap.less and just before the line “Utility classes” at the end, add @import "bootswatch.less";. This command includes bootswatch.less when compiling the LESS files to CSS, and placing it near the end overrides earlier styles with the same CSS selector specificity.

Now you can start customizing variables.less and bootswatch.less. You are also free to modify the other LESS files, which in some cases will be easier, but your swatch may become brittle to future changes in Bootstrap itself. When you’re ready to test your code, compile to CSS and enjoy!

Feedback
------
Please send bugs, submissions, and other feedback to thomas@thomaspark.me. For more information, visit http://thomaspark.me/2012/02/introducing-bootswatch/.

Author
------
**Thomas Park**

+ http://thomaspark.me
+ http://twitter.com/thomashpark

Copyright and License
----
Copyright 2012 Thomas Park

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
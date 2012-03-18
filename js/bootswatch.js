var menu = '<ul class="nav"> \
              <li><a onclick="pageTracker._link(this.href); return false;" href="http://bootswatch.tumblr.com">News</a></li> \
              <li><a id="swatch-link" href="/#gallery">Gallery</a></li> \
			  <li class="dropdown"> \
	         <a class="dropdown-toggle" data-toggle="dropdown" href="#">Preview <b class="caret"></b></a> \
	         <ul class="dropdown-menu"> \
	           <li><a href="/default">Default</a></li> \
	           <li class="divider"></li> \
	           <li><a href="/amelia">Amelia</a></li> \
	           <li><a href="/cerulean">Cerulean</a></li> \
	           <li><a href="/cyborg">Cyborg</a></li> \
	           <li><a href="/journal">Journal</a></li> \
	           <li><a href="/readable">Readable</a></li> \
	           <li><a href="/simplex">Simplex</a></li> \
	           <li><a href="/slate">Slate</a></li> \
	           <li><a href="/spacelab">Spacelab</a></li> \
	           <li><a href="/spruce">Spruce</a></li> \
	           <li><a href="/superhero">Superhero</a></li> \
	           <li><a href="/united">United</a></li> \
	         </ul> \
	       </li>';

if(document.title !== 'Bootswatch: Free themes for Twitter Bootstrap') {
	menu = menu + '<li class="divider-vertical"></li> \
					   <li class="dropdown"> \
				         <a class="dropdown-toggle" data-toggle="dropdown" href="#">Download <b class="caret"></b></a> \
				         <ul class="dropdown-menu"> \
				           <li><a target="_blank" href="bootstrap.min.css">bootstrap.min.css</a></li> \
				           <li><a target="_blank" href="bootstrap.css">bootstrap.css</a></li> \
				           <li class="divider"></li> \
				           <li><a target="_blank" href="variables.less">variables.less</a></li> \
				           <li><a target="_blank" href="bootswatch.less">bootswatch.less</a></li> \
				         </ul> \
				       </li>';
}

menu = menu + '			</ul> \
						<ul class="nav pull-right"> \
							<li><a rel="tooltip" target="_blank" href="http://builtwithbootstrap.com/" title="Showcase of Bootstrap sites & apps" onclick="_gaq.push([\'_trackEvent\', \'click\', \'outbound\', \'builtwithbootstrap\']);">Built With Bootstrap <i class="icon-share-alt icon-white"></i></a></li> \
			  				<li><a rel="tooltip" target="_blank" href="http://wrapbootstrap.com" title="Marketplace for premium Bootstrap templates" onclick="_gaq.push([\'_trackEvent\', \'click\', \'outbound\', \'wrapbootstrap\']);">WrapBootstrap <i class="icon-share-alt icon-white"></i></a></li> \
			  			</ul>';

			$('.navbar .nav-collapse').first().append(menu);
			
			$('a[rel=tooltip]').tooltip({
				'placement': 'bottom'
			});

var taglines = [];
taglines.push('Free themes for <a target="_blank" href="http://twitter.github.com/bootstrap/">Twitter Bootstrap</a>');
taglines.push('Add color to your <a target="_blank" href="http://twitter.github.com/bootstrap/">Bootstrap</a> site without touching a color picker');
taglines.push('Saving the web from default <a target="_blank" href="http://twitter.github.com/bootstrap/">Bootstrap</a>');

var line = Math.floor((taglines.length) * Math.random());
$('#tagline').html(taglines[line]);
			

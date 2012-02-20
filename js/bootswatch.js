$('.navbar .nav').first().append('<li class="dropdown"> \
	         <a class="dropdown-toggle" data-toggle="dropdown" href="#">Preview <b class="caret"></b></a> \
	         <ul class="dropdown-menu"> \
	           <li><a href="/default">Default</a></li> \
	           <li class="divider"></li> \
	           <li><a href="/cerulean">Cerulean</a></li> \
	           <li><a href="/cyborg">Cyborg</a></li> \
	           <li><a href="/journal">Journal</a></li> \
	           <li><a href="/simplex">Simplex</a></li> \
	           <li><a href="/slate">Slate</a></li> \
	           <li><a href="/spacelab">Spacelab</a></li> \
	           <li><a href="/united">United</a></li> \
	         </ul> \
	       </li>');
		   

	if(document.title !== 'Bootswatch: Free themes for Twitter Bootstrap') {
		console.log('true');
			   $('.navbar .nav').first().append('<li class="divider-vertical"></li> \
					   <li class="dropdown"> \
				         <a class="dropdown-toggle" data-toggle="dropdown" href="#">Download <b class="caret"></b></a> \
				         <ul class="dropdown-menu"> \
				           <li><a target="_blank" href="bootstrap.min.css">bootstrap.min.css</a></li> \
				           <li><a target="_blank" href="bootstrap.css">bootstrap.css</a></li> \
				           <li class="divider"></li> \
				           <li><a target="_blank" href="variables.less">variables.less</a></li> \
				           <li><a target="_blank" href="bootswatch.less">bootswatch.less</a></li> \
				         </ul> \
				       </li>');
	   }
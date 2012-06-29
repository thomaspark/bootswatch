$('#main-menu').load('/js/snippets/main-menu.html', function(){
	if($('body').hasClass('preview')){
		$('#main-menu-left').append('<li class="dropdown" id="preview-menu"></li>');
		$('#preview-menu').load('/js/snippets/preview-menu.html');
	}

	$('a[rel=tooltip]').tooltip({
		'placement': 'bottom'
	});
});
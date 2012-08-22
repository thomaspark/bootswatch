$('#main-menu').load('/js/snippets/main-menu.html', function(){
	if($('body').hasClass('preview')){
		$('#main-menu-left').append('<li class="dropdown" id="preview-menu"></li>');
		$('#preview-menu').load('/js/snippets/preview-menu.html');
	}

	$('a[rel=tooltip]').tooltip({
		'placement': 'bottom'
	});
});

function parseRSS(url, callback) {
  $.ajax({
    url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      callback(data.responseData.feed);
    }
  });
}
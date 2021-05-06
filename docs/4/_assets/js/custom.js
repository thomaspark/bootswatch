(function () {
  'use strict';

  $(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 50) {
      $('#home > .navbar').removeClass('navbar-transparent');
    } else {
      $('#home > .navbar').addClass('navbar-transparent');
    }
  })

  $('a[href="#"]').click(function (event) {
    event.preventDefault();
  })

  $('.bs-component').each(function () {
    var $component = $(this);
    var $button = $('<button class="source-button btn btn-primary btn-xs" role="button" tabindex="0">&lt; &gt;</button>');
    $component.append($button);

    if ($component.find('[data-toggle="tooltip"]').length > 0) {
      $component.attr('data-html', $component.html());
    }  
  });

  $('.bs-component [data-toggle="popover"]').popover();
  $('.bs-component [data-toggle="tooltip"]').tooltip();

  $('body').on('click', '.source-button', function (event) {
    event.preventDefault();

    var component = $(this).parent();
    var html = component.attr('data-html') ? component.attr('data-html') : component.html();

    html = cleanSource(html);
    $('#source-modal pre').text(html);
    $('#source-modal').modal();
  })

  function cleanSource(html) {
    html = html.replace(/×/g, '&times;')
               .replace(/«/g, '&laquo;')
               .replace(/»/g, '&raquo;')
               .replace(/←/g, '&larr;')
               .replace(/→/g, '&rarr;')

    var lines = html.split(/\n/);

    lines.shift();
    lines.splice(-1, 1);

    var indentSize = lines[0].length - lines[0].trim().length;
    var re = new RegExp(' {' + indentSize + '}');

    lines = lines.map(function (line) {
      if (line.match(re)) {
        line = line.slice(Math.max(0, indentSize));
      }

      return line;
    });

    lines = lines.join('\n');

    return lines;
  }
})();

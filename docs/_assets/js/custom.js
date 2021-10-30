(function () {
  'use strict';

  var $navBar = $('#home > .navbar');

  $(window).scroll(function () {
    var top = $(document).scrollTop();

    if (top > 50) {
      $navBar.removeClass('navbar-transparent');
    } else {
      $navBar.addClass('navbar-transparent');
    }
  });

  $('a[href="#"]').click(function (event) {
    event.preventDefault();
  });

  $('.bs-component').each(function (i, element) {
    var $component = $(element);
    var $button = $('<button class="source-button btn btn-primary btn-xs" type="button" tabindex="0">&lt; &gt;</button>');
    $component.append($button);
  });

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  var sourceModalElem = document.getElementById('source-modal');
  var sourceModal = sourceModalElem ? new bootstrap.Modal(sourceModalElem) : null;

  $('body').on('click', '.source-button', function () {
    var component = $(this).parent();
    var html = component.html();

    html = cleanSource(html);
    html = Prism.highlight(html, Prism.languages.html, 'html');
    sourceModalElem.querySelector('code').innerHTML = html;
    if (sourceModal) sourceModal.show();
  });

  function escapeHtml(html) {
    return html.replace(/×/g, '&times;')
               .replace(/«/g, '&laquo;')
               .replace(/»/g, '&raquo;')
               .replace(/←/g, '&larr;')
               .replace(/→/g, '&rarr;');
  }

  function cleanSource(html) {
    var lines = escapeHtml(html).split(/\n/);

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

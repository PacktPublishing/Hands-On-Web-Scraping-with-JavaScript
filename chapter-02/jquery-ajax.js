if ('jQuery' in window) {
  jQuery.noConflict();

  (function($) {
    $.ajax('http://example.com', {
      method: 'GET',
      dataType: 'text',
      headers: {
        'Cache-Control': 'no-cache'
      },
      success: function(data, statusText) {
        if (statusText === 'success') {
          console.log(data);
        } else {
          window.alert('Failed to fetch the requested page.');
        }
      },
      error: function() {
        window.alert('Failed to fetch the requested page.');
      }
    });
  })(jQuery);
}

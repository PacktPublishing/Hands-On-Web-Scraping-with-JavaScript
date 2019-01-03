var xhr = window.XMLHttpRequest
  ? new XMLHttpRequest()
  : window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : null;

if (xhr) {
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        window.alert('Failed to fetch the requested page.');
      }
    }
  };

  xhr.open('GET', 'http://example.com', true);
  xhr.setRequestHeader('Cache-Control', 'no-cache');
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.overrideMimeType('text/plain');
  xhr.send();
}

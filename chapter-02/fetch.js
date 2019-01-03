if ('fetch' in window) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache'
    }
  };

  const request = new Request('http://example.com', requestOptions);

  fetch(request)
    .then(response => {
      if (response.ok) {
        return response.text().then(console.log);
      }

      throw new Error;
    })
    .catch(e => {
      window.alert('Failed to fetch the requested page.');
    });
}

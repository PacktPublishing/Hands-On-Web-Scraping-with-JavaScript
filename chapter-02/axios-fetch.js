if (axios) {
  const requestOptions = {
    headers: {
      'Cache-Control': 'no-cache'
    },
    responseType: 'text'
  };

  axios.get('http://example.com', requestOptions)
    .then(response => console.log(response.data))
    .catch(e => {
      console.error(new Error('Failed to fetch the requested page.'));
    ]);
}

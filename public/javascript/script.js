const fileAddress = '/content/log.md';
    
    fetch(fileAddress)
      .then(response => {
        // handle the response
        if (!response.ok) {
          throw new Error('Log could not be loaded.');
        }
        return response.text();
      })
      .then(markdown => {
        // Turn Markdown into HTML
        const htmlContent = marked.parse(markdown);

        // Insert into the page
        document.getElementById('log-container').innerHTML = htmlContent;
      })
      .catch(error => {
        // handle the error
        document.getElementById('log-container').innerHTML = `<p>An error occured: ${error.message}</p>`;
      });

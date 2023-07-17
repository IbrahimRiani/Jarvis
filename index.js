const express = require('express');

const app = express();

app.use(express.json());

app.post('/api/messages', (req, res) => {
  const currentTime = new Date();
  const response = `La hora actual es: ${currentTime.toLocaleTimeString()}`;

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    type: 'message',
    text: response
  }));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});

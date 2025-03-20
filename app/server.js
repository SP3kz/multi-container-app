const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Docker Starter</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
          }
          .container {
            background-color: #f5f5f5;
            border-radius: 8px;
            padding: 20px;
            margin-top: 50px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🐳 Welcome to Docker Starter!</h1>
          <p>Your Docker container is running successfully.</p>
          <p>Server time: ${new Date().toLocaleString()}</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
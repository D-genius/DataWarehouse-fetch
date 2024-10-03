const express = require('express');
const axios = require('axios');
const cors = require('cors');  // Optional: For development testing with CORS enabled locally

const app = express();
const port = 3000;

// Enable CORS (optional, you can use this for testing in dev mode)
app.use(cors());

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Proxy endpoint
app.post('/proxy', async (req, res) => {
  try {
    const yearNow = new Date().getFullYear() - 1;
    const { county } = req.body;

    const requestBody = `year=${yearNow}&county=${county || ''}`;

    const response = await axios.post('https://hiv-dashboards.nascop.org/site/home-page-data', requestBody, {
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    });

    res.json(response.data); // Send the API response back to the client
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred while making the request.' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});

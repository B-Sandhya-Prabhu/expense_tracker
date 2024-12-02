const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware for JSON parsing
app.use(bodyParser.json());

// In-memory storage
const expenses = [];

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

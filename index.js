const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

app.use('/users', userRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

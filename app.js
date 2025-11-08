// Main application file for the Express.js web server
// Got some assistance from GitHub Copilot, since I faced difficulty

// Import Express framework
const express = require('express');

// Import path module
const path = require('path');

// Import routes
const indexRouter = require('./routes/index'); 

// Create Express app
const app = express();

// Set view engine
app.set('views', path.join(__dirname, 'views'));

// Using EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRouter);

// Start server
const port = process.env.PORT || 3000;

// Listen on specified port
app.listen(port, () => console.log(`Server running on port ${port}`));
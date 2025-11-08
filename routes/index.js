// Routes to different pages
// Got some assistance from GitHub Copilot, since I faced difficulty in creating routes for different pages

const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => res.render('index'));

// About page
router.get('/about', (req, res) => res.render('about'));

// Projects page
router.get('/projects', (req, res) => res.render('projects'));

// Contact page
router.get('/contact', (req, res) => res.render('contact'));

module.exports = router;

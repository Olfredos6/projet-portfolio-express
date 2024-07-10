
var express = require('express');
var router = express.Router();

const experiences = [
    {
        "title": "Senior Web Developer",
        "company": "Tech Innovators Inc.",
        "period": "2018 - Present",
        "description": "Led a team of developers in creating cutting-edge web applications for various clients across industries."
    },
    {
        "title": "Full Stack Developer",
        "company": "Digital Solutions Co.",
        "period": "2015 - 2018",
        "description": "Developed and maintained multiple web applications using modern JavaScript frameworks and PHP backends."
    }
]

const projects = [
    {
        "title": "E-commerce Platform",
        "image": "https://via.placeholder.com/300x200",
        "description": "Developed a full-featured e-commerce platform with secure payment integration and inventory management."
    },
    {
        "title": "Social Media Dashboard",
        "image": "https://via.placeholder.com/300x200",
        "description": "Created a responsive dashboard for managing multiple social media accounts with analytics and scheduling features."
    },
    {
        "title": "Weather App",
        "image": "https://via.placeholder.com/300x200",
        "description": "Built a sleek weather application using geolocation and a weather API to provide real-time forecasts."
    }
]

router.get('/', function (req, res, next) {
    res.render("index", { experiences: experiences, projects })
});

module.exports = router;

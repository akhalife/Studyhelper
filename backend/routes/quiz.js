const express = require("express");
const request = require("request");
const router = express.Router();
const informaticsQuestions = 'https://quizapi.io/api/v1/questions?apiKey=mvKsg1isQOwvrjyLYIJ91wLoBY0HyOIdvzZMlO0H&limit=10';
const devopsQuestions = 'https://quizapi.io/api/v1/questions?apiKey=mvKsg1isQOwvrjyLYIJ91wLoBY0HyOIdvzZMlO0H&category=devops&limit=10';


router.get('/informatics', (req, res, next) =>{
    request({url: informaticsQuestions}, (error, response) =>{ 
        const data = JSON.parse(response.body) 
        res.status(200).send(data);
    });
});

router.get('/devops', (req, res) =>{
    request({url: devopsQuestions}, (error, response) =>{ 
        const data = JSON.parse(response.body) 
        res.status(200).send(data);
    });
});


module.exports= router;
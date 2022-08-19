const mongoose = require('mongoose');


const quizSchema = mongoose.Schema({
    id: {type: Number},
    question: {type: String} ,
    description: {type: String},
    answer: [],
    correct_answers: [],
    correct_answer: {type: String},
    tags: [],
    category: {type: String},
    difficulty: {type: String}
});

module.exports = mongoose.model('Quiz', quizSchema);
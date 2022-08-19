import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Quiz {
  id: number;
  question: string;
  description: string;
  answer: [];
  correct_answers: [];
  correct_answer: string;
  explanation: null;
  tags: { name: string }[];
  category: string;
  difficulty: string;
}

interface secondQuiz {
  question: string;
  answer: { option: string; correct: boolean }[];
}

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quizzes: secondQuiz[] = [
    {
      question: '3 x 3',
      answer: [
        { option: '7', correct: false },
        { option: '11', correct: false },
        { option: '9', correct: true },
        { option: '12', correct: false },
      ],
    },
    {
      question: '5 x 9',
      answer: [
        { option: '50', correct: false },
        { option: '40', correct: false },
        { option: '45', correct: true },
        { option: '43', correct: false },
      ],
    },
    {
      question: '13 x 6',
      answer: [
        { option: '78', correct: true },
        { option: '72', correct: false },
        { option: '68', correct: false },
        { option: '75', correct: false },
      ],
    },
    {
      question: '65 x 3',
      answer: [
        { option: '200', correct: false },
        { option: '190', correct: false },
        { option: '195', correct: true },
        { option: '180', correct: false },
      ],
    },
    {
      question: '4 x 4',
      answer: [
        { option: '20', correct: false },
        { option: '16', correct: true },
        { option: '13', correct: false },
        { option: '15', correct: false },
      ],
    },
    {
      question: '7 x 7',
      answer: [
        { option: '42', correct: false },
        { option: '46', correct: false },
        { option: '49', correct: true },
        { option: '56', correct: false },
      ],
    },
    {
      question: '14 x 8',
      answer: [
        { option: '116', correct: false },
        { option: '99', correct: false },
        { option: '112', correct: true },
        { option: '87', correct: false },
      ],
    },
    {
      question: '1 x 1',
      answer: [
        { option: '0', correct: false },
        { option: '-1', correct: false },
        { option: '1', correct: true },
        { option: '2', correct: false },
      ],
    },
    {
      question: '7 x 5',
      answer: [
        { option: '32', correct: false },
        { option: '30', correct: false },
        { option: '35', correct: true },
        { option: '40', correct: false },
      ],
    },
    {
      question: '8 x 8',
      answer: [
        { option: '8', correct: false },
        { option: '60', correct: false },
        { option: '64', correct: true },
        { option: '59', correct: false },
      ],
    },
  ];

  constructor(private http: HttpClient) {}

  getQuizzes() {
    return this.quizzes;
  }

  getInformaticQuiz(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>('http://localhost:3000/api/quiz/informatics');
  }

  
}

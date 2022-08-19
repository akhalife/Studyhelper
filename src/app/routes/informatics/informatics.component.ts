import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../quiz.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-informatics',
  templateUrl: './informatics.component.html',
  styleUrls: ['./informatics.component.scss'],
})
export class InformaticsComponent implements OnInit {
  public quizzes: any = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {}

  getQuiz() {
    this.quizzes = this.quizService
      .getInformaticQuiz()
      .pipe(tap((x) => console.log('quiz', x)))
      .subscribe((data) => (this.quizzes = data));
  }
}

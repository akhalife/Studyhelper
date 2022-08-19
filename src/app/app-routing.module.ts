import { Injectable, NgModule } from '@angular/core';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { MathComponent } from './routes/math/math.component';
import { HomeComponent } from './routes/home/home.component';
import { QuizComponent } from './routes/quiz/quiz.component';
import { InformaticsComponent } from './routes/informatics/informatics.component';
import { BackgroundDirective } from './background.directive';
import { ImpressumComponent } from './routes/impressum/impressum.component';
import { AuthGuard } from 'src/services/auth.guard';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { DerivateComponent } from './routes/math/derivate/derivate.component';
import { IntegralComponent } from './routes/math/integral/integral.component';
import { Title } from '@angular/platform-browser';
import { MathOverviewComponent } from './routes/math/math-overview/math-overview.component';
import { InformaticsOverviewComponent } from './routes/informatics/informatics-overview/informatics-overview.component';
import { AussagenlogikComponent } from './routes/informatics/aussagenlogik/aussagenlogik.component';
import { EndlicheAutomatenComponent } from './routes/informatics/endliche-automaten/endliche-automaten.component';
import { PraedikatenlogikComponent } from './routes/informatics/praedikatenlogik/praedikatenlogik.component';
import { UnixComponent } from './routes/informatics/unix/unix.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'math', redirectTo: 'math/overview' },
  {
    path: 'math',
    title: 'Mathematics',
    component: MathComponent,
    children: [
      {
        path: 'overview', //child route path
        title: 'Overview',
        component: MathOverviewComponent, //child route component that the router renders
      },
      {
        path: 'derivate', //child route path
        title: 'Derivates',
        component: DerivateComponent, //child route component that the router renders
      },
      {
        path: 'integral',
        title: 'Integrals',
        component: IntegralComponent,
      },
    ],
  },
  { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'informatics', redirectTo: 'informatics/overview' },
  {
    path: 'informatics',
    component: InformaticsComponent,
    children: [
      {
        path: 'overview', //child route path
        title: 'Overview',
        component: InformaticsOverviewComponent, //child route component that the router renders
      },
      {
        path: 'aussagenlogik', //child route path
        title: 'Aussagenlogik',
        component: AussagenlogikComponent, //child route component that the router renders
      },
      {
        path: 'endliche-automaten',
        title: 'Endliche Automaten',
        component: EndlicheAutomatenComponent,
      },
      {
        path: 'praedikatenlogik',
        title: 'Praedikatenlogik',
        component: PraedikatenlogikComponent,
      },
      {
        path: 'unix',
        title: 'Unix',
        component: UnixComponent,
      },
    ],
  },
  { path: 'impressum', component: ImpressumComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [BackgroundDirective],
  exports: [RouterModule, BackgroundDirective],
  providers: [
    AuthGuard,
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ],
})
export class AppRoutingModule {}

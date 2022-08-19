import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

const EXTRA_SMALL_WIDTH_BREAKPOINT = 720;
const SMALL_WIDTH_BREAKPOINT = 959;

@Component({
  selector: 'app-informatics-nav',
  templateUrl: './informatics-nav.component.html',
  styleUrls: ['./informatics-nav.component.scss'],
})
export class InformaticsNavComponent {
  isExtraScreenSmall: Observable<boolean>;
  isScreenSmall: Observable<boolean>;

  constructor(
    private breakpoints: BreakpointObserver,
    public titleService: Title
  ) {
    this.isExtraScreenSmall = breakpoints
      .observe(`(max-width: ${EXTRA_SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map((breakpoint) => breakpoint.matches));
    this.isScreenSmall = breakpoints
      .observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map((breakpoint) => breakpoint.matches));
  }
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit {
  selected: string | null;

  constructor(private _translateService: TranslateService) {
    this.selected = localStorage.getItem('locale');

    if (this.selected == null) {
      this.selected = 'de';
    }
    _translateService.addLangs(['de', 'en']);
    if (localStorage.getItem('locale')) {
      const browserLang = localStorage.getItem('locale');
      // @ts-ignore
      _translateService.use(browserLang.match(/de|en/) ? browserLang : 'de');
    } else {
      localStorage.setItem('locale', 'de');
      _translateService.setDefaultLang('de');
    }
  }

  ngOnInit(): void {}

  changeLang(language: string) {
    localStorage.setItem('locale', language);
    this._translateService.use(language);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  selected: string | null;




  constructor() {
    this.selected = localStorage.getItem('locale')

  }

  ngOnInit(): void {
  }


  changeLocale(locale: string) {
    // Store the user's preferred locale in localStorage
    localStorage.setItem('locale', locale);

    // Reload the page to apply the new locale
    location.reload();

  }
}

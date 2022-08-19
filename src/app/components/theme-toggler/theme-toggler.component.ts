import {Component} from '@angular/core';
import {ThemeService} from "../../theme.service";


@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent {

  isDarkMode: boolean;
  mode: string;

  constructor(private themeService: ThemeService) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
    if (this.isDarkMode) {
      this.mode = 'light_mode'
    } else {
      this.mode = 'nightlight_round'
    }
  }

  ngOnInit(): void {}

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();
    if (this.isDarkMode) {
      this.mode = 'nightlight_round'
    } else {
      this.mode = 'light_mode'
    }
    this.isDarkMode
      ? this.themeService.update('light-theme')
      : this.themeService.update('dark-theme');
  }
}

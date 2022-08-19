import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme!: string;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    this.getColorTheme();
    if (this.colorTheme != null) {
      this.renderer.addClass(document.body, this.colorTheme);
    }
  }

  update(theme: 'dark-theme' | 'light-theme') {
    this.setColorTheme(theme);
    const previousColorTheme =
      theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    this.renderer.removeClass(document.body, previousColorTheme);
    this.renderer.addClass(document.body, theme);
  }

  isDarkMode() {
    return this.colorTheme === 'dark-theme';
  }

  private setColorTheme(theme: string) {
    this.colorTheme = theme;
    localStorage.setItem('user-theme', theme);
  }

  private getColorTheme() {
    if (localStorage.getItem('user-theme')) {
      // @ts-ignore
      this.colorTheme = localStorage.getItem('user-theme');
    } else {
      this.colorTheme = 'light-theme';
    }
  }
}

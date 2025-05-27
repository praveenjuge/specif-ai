import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme = new BehaviorSubject<Theme>(this.getInitialTheme());

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  getInitialTheme(): Theme {
    const storedTheme = localStorage.getItem('theme') as Theme;
    return storedTheme || 'light';
  }

  getCurrentTheme() {
    return this.currentTheme.asObservable();
  }

  setTheme(theme: Theme) {
    this.renderer.removeClass(document.body, this.currentTheme.value);
    this.renderer.addClass(document.body, theme);
    localStorage.setItem('theme', theme);
    this.currentTheme.next(theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  applyInitialTheme() {
    this.renderer.addClass(document.body, this.currentTheme.value);
  }
}

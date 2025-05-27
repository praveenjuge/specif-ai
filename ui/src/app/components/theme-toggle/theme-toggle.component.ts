import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroSun, heroMoon } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgIconComponent],
  providers: [provideIcons({ heroSun, heroMoon })],
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}

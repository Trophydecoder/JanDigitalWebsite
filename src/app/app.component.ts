import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/global/navbar/navbar.component';
import { FooterComponent } from './components/global/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <main><router-outlet /></main>
    <app-footer />
  `
})
export class AppComponent {}

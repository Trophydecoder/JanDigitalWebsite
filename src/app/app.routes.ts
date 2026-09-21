import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about/about.component';
import { ServicesPageComponent } from './pages/services/services.component';
import { ClientsPageComponent } from './pages/clients/clients.component';
import { HowWeWorkPageComponent } from './pages/how-we-work/how-we-work.component';
import { ContactPageComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'JANDIGITAL — Creative Minds. Digital Impact.' },
  { path: 'about', component: AboutPageComponent, title: 'About — JANDIGITAL' },
  { path: 'services', component: ServicesPageComponent, title: 'Services — JANDIGITAL' },
  { path: 'clients', component: ClientsPageComponent, title: 'Clients — JANDIGITAL' },
  { path: 'how-we-work', component: HowWeWorkPageComponent, title: 'How We Work — JANDIGITAL' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact — JANDIGITAL' },
  { path: '**', redirectTo: '' }
];

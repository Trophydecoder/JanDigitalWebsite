import { Component } from '@angular/core';
import { HomeHeroComponent } from '../../components/home/home-hero/home-hero.component';
import { ServicesPreviewComponent } from '../../components/home/services-preview/services-preview.component';
import { ClientShowcaseComponent } from '../../components/home/client-showcase/client-showcase.component';
import { ProcessComponent } from '../../components/home/process/process.component';
import { ContactComponent } from '../../components/global/contact/contact.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeHeroComponent, ServicesPreviewComponent, ClientShowcaseComponent, ProcessComponent, ContactComponent],
  template: `
    <app-home-hero />
    <app-services-preview />
    <app-client-showcase />
    <app-process />
    <app-contact-cta />
  `
})
export class HomePageComponent {}

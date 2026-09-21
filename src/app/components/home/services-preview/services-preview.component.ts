import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-preview.component.html',
  styleUrl: './services-preview.component.scss'
})
export class ServicesPreviewComponent {
  services = [
    { n:'01', title:'Websites & Web Development', text:'Modern, responsive websites that help your business stand out.', img:'site-business.png' },
    { n:'02', title:'Branding', text:'Visual identities that make your business memorable and consistent.', img:'site-branding.png' },
    { n:'03', title:'Digital Marketing', text:'Strategies and content that help you reach the right people.', img:'site-marketing.png' },
    {
      n: '04',
      title: 'Solutions & Content',
      text: 'Digital solutions and content built around your business, your audience and your goals.',
      img: 'site-app.png'
    }
  ];
}

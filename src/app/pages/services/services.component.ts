import { Component } from '@angular/core';
import { ContactComponent } from '../../components/global/contact/contact.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [ContactComponent],
  template: `
  <section class="page-hero"><div class="container"><span class="eyebrow">What we do</span><h1>Digital services<br><span>built to perform.</span></h1><p>Four focused capabilities. One digital partner.</p></div></section>
  <section class="section services"><div class="container grid">@for (s of services; track s.n){<article><span>{{s.n}}</span><h2>{{s.title}}</h2><p>{{s.text}}</p><ul>@for(item of s.items;track item){<li>{{item}}</li>}</ul></article>}</div></section>
  <app-contact-cta />
  `,
  styles:[`
    .page-hero{padding:140px 0 110px;background:linear-gradient(90deg,rgba(3,6,9,.96),rgba(3,6,9,.5)),url('/assets/images/services-office.png') center/cover}h1{font:700 clamp(52px,7vw,90px)/.9 'Space Grotesk';letter-spacing:-.065em;margin:18px 0}h1 span{color:#1268ff}.page-hero p{color:#99a7b8;font-size:18px}
    .services{background:#030609}.grid{grid-template-columns:1fr 1fr}.grid article{padding:40px;border:1px solid rgba(255,255,255,.1);background:#07111d;min-height:320px}.grid article>span{color:#2c82ff;font:600 14px 'Space Grotesk'}.grid h2{font:600 32px 'Space Grotesk';margin:30px 0 15px}.grid p,.grid li{color:#95a2b2;line-height:1.7}.grid ul{padding-left:18px}@media(max-width:700px){.grid{grid-template-columns:1fr}}
  `]
})
export class ServicesPageComponent {
  services = [
    {n:'01',title:'Websites & Web Development',text:'Modern, responsive digital experiences built around your business.',items:['Business websites','Landing pages','E-commerce','Web applications','Redesigns']},
    {n:'02',title:'Branding',text:'Visual systems that make your business recognizable and consistent.',items:['Logo design','Brand identity','Social media visuals','Marketing materials','Brand guidelines']},
    {n:'03',title:'Digital Marketing',text:'Digital strategies designed to help you reach the right audience.',items:['Content strategy','Social media','Campaigns','Digital advertising','Lead generation']},
    {
      n: '04',
      title: 'Solutions & Content',
      text: 'Digital solutions and content built around your business, your audience and your goals.',
      items: [
        'Digital content',

        'Custom solutions',
        'Business tools',
        'Digital experiences'
      ]
    }
  ];
}

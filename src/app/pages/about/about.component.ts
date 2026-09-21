import { Component } from '@angular/core';
import { ContactComponent } from '../../components/global/contact/contact.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [ContactComponent],
  template: `
  <section class="page-hero"><div class="container"><span class="eyebrow">About JANDIGITAL</span><h1>More than websites.<br><span>We build digital growth.</span></h1><p>JANDIGITAL is a South African digital studio focused on websites, branding, digital marketing and custom digital solutions.</p></div></section>
  <section class="section about"><div class="container about-grid"><div><span class="eyebrow">Our approach</span><h2 class="section-title">Creative thinking.<br>Strategic execution.</h2></div><div class="copy"><p>We believe good digital work should look good, work hard and make sense for the business behind it.</p><p>From the first conversation to launch, we combine design, development and strategy to create useful digital experiences.</p></div></div></section>
  <app-contact-cta />
  `,
  styles: [`
    .page-hero{min-height:520px;display:flex;align-items:end;padding:100px 0;background:linear-gradient(90deg,rgba(3,6,9,.96),rgba(3,6,9,.5)),url('/assets/images/about-office.png') center/cover}
    h1{font:700 clamp(52px,7vw,92px)/.9 'Space Grotesk';letter-spacing:-.065em;margin:18px 0 25px;text-transform:uppercase}
    h1 span{color:#1268ff}.page-hero p{color:#a7b3c2;max-width:620px;font-size:17px;line-height:1.7}
    .about{background:#06101d}.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:90px}.copy{color:#9ba9ba;line-height:1.9;font-size:17px}
    @media(max-width:760px){.about-grid{grid-template-columns:1fr;gap:30px}}
  `]
})
export class AboutPageComponent {}

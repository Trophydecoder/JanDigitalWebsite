import { Component } from '@angular/core';
import { ContactComponent } from '../../components/global/contact/contact.component';

@Component({
  selector:'app-clients-page',
  standalone:true,
  imports:[ContactComponent],
  template:`
  <section class="page-hero"><div class="container"><span class="eyebrow">Our clients</span><h1>Real businesses.<br><span>Real digital work.</span></h1><p>A look at projects we've designed and developed.</p></div></section>
  <section class="section client"><div class="container"><div class="case"><div class="copy"><span class="eyebrow">Featured project</span><h2>Supa Rain<br>Waterproofing</h2><p>A focused website experience for a Centurion waterproofing business, built to clearly communicate services and drive enquiries.</p><a class="btn btn-primary" href="https://www.suparainwaterproofing.co.za" target="_blank" rel="noopener">Visit Live Website </a></div><img src="assets/images/supa-rain-home.png" alt="Supa Rain Waterproofing website"></div></div></section>
  <app-contact-cta />
  `,
  styles:[`
    .page-hero{padding:140px 0 110px;background:#06101d}h1{font:700 clamp(52px,7vw,90px)/.9 'Space Grotesk';letter-spacing:-.065em;margin:18px 0}h1 span{color:#1268ff}.page-hero p{color:#9aa8b8;font-size:18px}.client{background:#030609}.case{display:grid;grid-template-columns:.7fr 1.3fr;gap:60px;align-items:center}.copy h2{font:600 clamp(42px,5vw,68px)/.92 'Space Grotesk';letter-spacing:-.05em}.copy p{color:#98a5b5;line-height:1.8;margin:25px 0 30px}.case>img{width:100%;border:1px solid rgba(255,255,255,.12);padding:10px;background:#07111d}@media(max-width:800px){.case{grid-template-columns:1fr}}
  `]
})
export class ClientsPageComponent {}

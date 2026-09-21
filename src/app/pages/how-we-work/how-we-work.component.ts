import { Component } from '@angular/core';
import { ContactComponent } from '../../components/global/contact/contact.component';

@Component({
 selector:'app-how-we-work-page', standalone:true, imports:[ContactComponent],
 template:`
 <section class="page-hero"><div class="container"><span class="eyebrow">How we work</span><h1>Simple process.<br><span>Serious execution.</span></h1><p>No unnecessary complexity. Just a clear path from idea to launch.</p></div></section>
 <section class="section process"><div class="container">@for(s of steps;track s.n){<div class="step"><strong>{{s.n}}</strong><div><h2>{{s.t}}</h2><p>{{s.p}}</p></div></div>}</div></section>
 <app-contact-cta />
 `,
 styles:[`
 .page-hero{padding:140px 0 110px;background:linear-gradient(120deg,#030609,#06172a)}h1{font:700 clamp(52px,7vw,90px)/.9 'Space Grotesk';letter-spacing:-.065em;margin:18px 0}h1 span{color:#1268ff}.page-hero p{color:#99a7b8;font-size:18px}.process{background:#030609}.step{display:grid;grid-template-columns:130px 1fr;padding:55px 0;border-bottom:1px solid rgba(255,255,255,.1)}.step strong{color:#1268ff;font:600 30px 'Space Grotesk'}.step h2{font:600 42px 'Space Grotesk';margin:0 0 12px}.step p{color:#94a2b2;line-height:1.7;max-width:650px}@media(max-width:650px){.step{grid-template-columns:70px 1fr}.step h2{font-size:30px}}
 `]
})
export class HowWeWorkPageComponent {
 steps=[
  {n:'01',t:'Discover',p:'We learn about your business, audience, goals and what success should look like.'},
  {n:'02',t:'Plan',p:'We turn the information into a clear digital direction, structure and scope.'},
  {n:'03',t:'Build',p:'Design and development happen together, with feedback at the right moments.'},
  {n:'04',t:'Launch & Grow',p:'We launch the work and remain available for improvements, support and growth.'}
 ];
}

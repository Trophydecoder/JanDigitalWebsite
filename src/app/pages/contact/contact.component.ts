import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule],

  template: `
    <section class="contact-page">

      <div class="container grid">

        <!-- LEFT -->
        <div class="intro">

          <span class="eyebrow">Start a project</span>

          <h1>
            Let's build something<br>
            <span>worth seeing.</span>
          </h1>

          <p>
            Tell us about your business, idea or project.
            We'll get back to you directly on WhatsApp.
          </p>

          <div class="details">
            <a href="https://wa.me/27695376971"
               target="_blank"
               rel="noopener">
              WhatsApp: 069 537 6971
            </a>

            <span>South Africa</span>
          </div>

        </div>


        <!-- FORM -->
        <form (ngSubmit)="sendToWhatsApp()">

          <label>
            Name
            <input
              type="text"
              name="name"
              [(ngModel)]="form.name"
              placeholder="Your name"
              required
            >
          </label>


          <label>
            Business
            <input
              type="text"
              name="business"
              [(ngModel)]="form.business"
              placeholder="Business name"
            >
          </label>


          <label>
            What do you need?
            <textarea
              name="message"
              [(ngModel)]="form.message"
              rows="7"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </label>


          <button
            class="btn btn-whatsapp"
            type="submit">
            Send via WhatsApp
            <span>↗</span>
          </button>

        </form>

      </div>

    </section>
  `,

  styles: [`

    .contact-page {
      padding: 120px 0;
      min-height: calc(100vh - 82px);

      background:
        linear-gradient(
          110deg,
          rgba(3, 6, 9, .96),
          rgba(6, 23, 42, .88)
        ),
        url('/assets/images/contactbg.png')
        center / cover no-repeat;
    }


    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 90px;
      align-items: start;
    }


    .intro h1 {
      font:
        700 clamp(48px, 6vw, 78px) / .92
        'Space Grotesk';

      letter-spacing: -.06em;
      margin: 20px 0;
    }


    .intro h1 span {
      color: #1268ff;
    }


    .intro p {
      color: #98a6b7;
      line-height: 1.8;
      max-width: 520px;
      font-size: 17px;
    }


    .details {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 45px;
    }


    .details a {
      color: #25d366;
      font-weight: 600;
      text-decoration: none;
    }


    .details a:hover {
      color: #5ee88b;
    }


    .details span {
      color: #d8dee7;
    }


    form {
      background: rgba(7, 17, 29, .82);
      border: 1px solid rgba(255, 255, 255, .1);
      padding: 35px;
      backdrop-filter: blur(12px);
    }


    label {
      display: block;
      color: #aeb9c7;
      font-size: 12px;
      margin-bottom: 18px;
    }


    input,
    textarea {
      display: block;
      width: 100%;
      margin-top: 8px;

      border: 1px solid rgba(255, 255, 255, .12);

      background: #03070d;
      color: white;

      padding: 14px;

      outline: none;
      border-radius: 2px;

      resize: vertical;
    }


    input:focus,
    textarea:focus {
      border-color: #1268ff;
    }


    .btn-whatsapp {
      width: 100%;
      margin-top: 5px;

      background: #25d366;
      color: #06100a;

      border: none;
      font-weight: 700;

      transition: .25s ease;
    }


    .btn-whatsapp:hover {
      background: #4be27f;
      transform: translateY(-2px);
    }


    @media (max-width: 800px) {

      .grid {
        grid-template-columns: 1fr;
        gap: 50px;
      }

      .contact-page {
        padding: 80px 0;
      }

    }

  `]
})

export class ContactPageComponent {

  form = {
    name: '',
    business: '',
    message: ''
  };


  sendToWhatsApp() {

    const phone = '27695376971';

    const message = `
Hello JANDIGITAL 👋

I'd like to start a project.

Name: ${this.form.name}

Business: ${this.form.business || 'Not provided'}

Project:
${this.form.message}
    `.trim();

    const whatsappUrl =
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  }

}
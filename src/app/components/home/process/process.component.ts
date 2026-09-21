import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  steps = [
    ['01','Discover','We learn about your business, goals and what you need.'],
    ['02','Plan','We create a tailored strategy and digital direction.'],
    ['03','Build','We design, develop and bring the project to life.'],
    ['04','Launch & Grow','We go live and support you as you grow.']
  ];
}

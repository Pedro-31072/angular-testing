import { Component } from '@angular/core';
import { MedicosComponent } from './medium/spy/medicos.component';

@Component({
  selector: 'app-root',
  imports: [MedicosComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

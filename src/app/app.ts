import { Component } from '@angular/core';
import { Medico } from './medium2/medico/medico';
import { IncrementadorComponent } from './medium2/incrementador/incrementador.component';

@Component({
  selector: 'app-root',
  imports: [Medico,IncrementadorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

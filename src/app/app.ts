import { Component } from '@angular/core';
import { Medico } from './medium2/medico/medico';

@Component({
  selector: 'app-root',
  imports: [Medico],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

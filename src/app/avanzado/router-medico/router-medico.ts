import { Component, OnInit, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-router-medico',
  imports: [],
  templateUrl: './router-medico.html',
  styles: ``,
})
export class RouterMedico implements OnInit {
  constructor(public router: Router, public route: ActivatedRoute) {
     this.id = toSignal(
      this.route.params.pipe(map((el) => el["id"] ?? '')),
      { initialValue: '' }
    );
  }
  public id!: Signal<string>;

  ngOnInit(): void {

  }
  public guardarMedico() {
    this.router.navigate(['medico', '123']);
  }
}

import {
  Component,
  Input,
  Output,
  ViewChild,
  OnInit,
  EventEmitter,
  ElementRef,
  ChangeDetectionStrategy,
  viewChild,
  signal,
  model,
  Signal,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress?: ElementRef<HTMLInputElement>;

  private _leyenda = signal('Leyenda');
  @Input('nombre') set leyenda(valor: string) {
    this._leyenda.set(valor);
  }
  get leyenda(): Signal<string> {
    return this._leyenda;
  }

  protected _progreso = model<number>(50);

  @Input() public set progreso(valor: number) {
    this._progreso.set(valor);
  }
  public get progreso(): Signal<number> {
    return this._progreso;
  }

  public cambioValor = output<number>({ alias: 'actualizaValor' });

  constructor() {}

  ngOnInit() {}

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this._progreso.set(100);
    } else if (newValue <= 0) {
      this._progreso.set(0);
    } else {
      this._progreso.set(newValue);
    }

    this.txtProgress!.nativeElement.value = '' + this.progreso();

    this.cambioValor.emit(this.progreso());
  }

  cambiarValor(valor: number) {
    if (this.progreso() >= 100 && valor > 0) {
      this._progreso.set(100);
      return;
    }

    if (this.progreso() <= 0 && valor < 0) {
      this._progreso.set(0);
      return;
    }

    this._progreso.set(this.progreso() + valor);

    this.cambioValor.emit(this._progreso());
  }
}

import { Component, OnInit, Input, Output /*, EventEmitter */} from '@angular/core';
import { InterfaceHeroe } from '../../services/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: InterfaceHeroe;
  @Input() indice: number;

  // @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    // this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate(['heroe', this.indice]);
    // this.heroeSeleccionado.emit(this.indice);
  }
}

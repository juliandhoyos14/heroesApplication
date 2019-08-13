import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { InterfaceHeroe } from '../../services/heroe.interface';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  indice: string;
  heroe: InterfaceHeroe;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.indice = params['id'];
      this.heroe = this.heroesService.getHeroe(this.indice);
    });
  }

}

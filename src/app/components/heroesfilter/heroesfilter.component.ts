import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { InterfaceHeroe } from '../../services/heroe.interface';

@Component({
  selector: 'app-heroesfilter',
  templateUrl: './heroesfilter.component.html'
})
export class HeroesfilterComponent implements OnInit {

  heroesArr: InterfaceHeroe[];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroesArr = this.heroesService.buscarHeroes(this.termino);
    });
  }
}

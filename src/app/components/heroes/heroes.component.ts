import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { InterfaceHeroe } from '../../services/heroe.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: InterfaceHeroe[] = [];

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(indice: number) {
    this.router.navigate(['heroe', indice]);
  }

}

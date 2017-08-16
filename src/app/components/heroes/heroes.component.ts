import { Component, OnInit } from '@angular/core';
import { HeroesService, InterfazHeroe } from '../../servicios/heroes.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  //misHeroes:any[] = [];
  misHeroes:InterfazHeroe[] = []; //para evitar que pongan otro dato q no pertenezca a las caracteristicas


  constructor(private _miservicio:HeroesService,
              private ruta:Router
                ) {
    //this.heroes = _miservicio.getHeroes();
  }


  ngOnInit() { //se usa para cargar cdo toda la pagina esta renderizada, es decir cdo esta listo el DOM
   this.misHeroes = this._miservicio.getheroes();
    // console.log(this.misHeroes);
    // console.log( this._miservicio.getheroes() );
  }

  verHeroe(idx:number){
    //console.log(idx);
    this.ruta.navigate(['/heroe',idx]);
  }

}

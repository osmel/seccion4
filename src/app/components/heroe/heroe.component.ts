import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
//ActivatedRoute

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any={};
  constructor(private rutaActiva: ActivatedRoute,
              private _heroeServicio:HeroesService
  ) {
      /*
      necesitamos escuchar los cambios o lo que venga de estos parametros. Esto regresa un observador,
      es algo como una promesa, algo q esta pendiente de esos cambios. Para que esto funciones nosotros
      necesitamos suscribirnos a ese observador
      */


/*
para referirme a cada uno,
   get routeConfig(): Route|null
   get root(): ActivatedRoute
   get parent(): ActivatedRoute|null
   get firstChild(): ActivatedRoute|null
   get children(): ActivatedRoute[]
   get pathFromRoot(): ActivatedRoute[]
   get paramMap(): Observable<ParamMap>
   get queryParamMap(): Observable<ParamMap>
   toString(): string

    //para referirse a padre, hermanos, hijos, etc
    this.rutaActiva.parent.params.subscribe( parametroPadre => {
        console.log('parent', parametroPadre);
    });


     snapshot: ActivatedRouteSnapshot //La instantánea actual de esta ruta
                   /https://yakovfain.com/2017/03/26/angular-4-changes-in-the-router/
     //observables
     url: Observable<UrlSegment[]> //* Un observable de los segmentos de URL que coincide con esta ruta. Devuelve un array
     params: Observable<Params> //*   Un observable de los parametros que fueron definidos para esta ruta. Devuelve un array
     queryParams: Observable<Params> //* Observable de los parámetros de consulta compartidos por todas las rutas
     fragment: Observable<string> //* Un observable del "fragmento de URL" compartido por todas las rutas
     data: Observable<Data>  //* Un observable de las "data estatica" y  "data dinamica resolved" de esta ruta
     //constantes
     outlet: string   // El name de outlet de la ruta. Es una constante
     component: Type<any>|string|null  //El componente de la ruta. Es una constante


     //constantes
     console.log('outlet',this.rutaActiva.outlet);
     console.log('component',this.rutaActiva.component);

     //observables
    this.rutaActiva.data.subscribe(misdatos => {
      console.log('data',misdatos);
    });

    this.rutaActiva.queryParams.subscribe(consulta => {
      console.log('queryParams',consulta);
    });

    this.rutaActiva.fragment.subscribe(fragmento => {
      console.log('fragment',fragmento);
    });

    this.rutaActiva.url.subscribe(path => {
      console.log('url',path);
    });
    */

      this.rutaActiva.params.subscribe(parametro => {
        console.log(parametro); //esto va a regresar un objeto con todos los parametros en este caso id:0
        //tener presente que los parametros q regresan son los q declaramos en el router y con los mismos nombres que usamos en el router
        //puedo verlo así console.log(parametro.id); pero la forma adecuada es:
        console.log(parametro['id']); //es mas seguro
        this.heroe = this._heroeServicio.getheroe(parametro['id']);
        console.log(this.heroe);
      });
  }

  ngOnInit() {
  }

}

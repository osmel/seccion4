import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

import { HeroeComponent } from './components/heroe/heroe.component';



const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent }, //default
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  {path:'heroe/:id',component:HeroeComponent, data:{nombre:'osmel'} },

  //esta es la ruta por defecto, que tomara sino coincide ninguna
  { path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

//si usas este sin hash, asegurarse de que en index.html aparezca esto   <base href="/">
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//useHash:true ->para el uso de parametros
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});

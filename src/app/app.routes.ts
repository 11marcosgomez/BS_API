import { Routes } from '@angular/router';
import path from 'path';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PersonajesAOTComponent } from './componentes/personajes-aot/personajes-aot.component';


export const routes: Routes = [{
    path: "",
    redirectTo:"inicio",
    pathMatch: 'full'
},{
    path :"inicio",
    component:InicioComponent
},{
    path:"registro",
    component:RegistroComponent
},{
    path:"iniciosesion",
    component:InicioSesionComponent
},{
    path:"personajes",
    component:PersonajesAOTComponent
}


]


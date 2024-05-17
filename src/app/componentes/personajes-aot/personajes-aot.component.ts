import { Component, inject } from '@angular/core';
import { ApiAOT, Result } from '../../common/api-aot';
import { Services } from '../../services';

@Component({
  selector: 'app-personajes-aot',
  standalone: true,
  imports: [],
  templateUrl: './personajes-aot.component.html',
  styleUrl: './personajes-aot.component.css'
})
export class PersonajesAOTComponent {
  personajes!: ApiAOT
  result!: Result
  private data: Services = inject(Services);

  constructor(){
    this.cargarRM();
  }
  private cargarRM(){
    this.data.loadAOT().subscribe({
      next: (datos: ApiAOT) =>{
        this.personajes = datos;
      }, 
      error: (err: string) =>{
        console.log(err);
      }, 
      complete: () =>{
        console.log("Complete");
      }
    })
  }

  cambiarPag(pag: string){
    switch(pag){
      case "first":
        this.loadPag("https://api.attackontitanapi.com/characters?page=1");
        break;
      case "prev":
        this.loadPag(this.personajes.info.prev_page);
        break
      case "next":
        this.loadPag(this.personajes.info.next_page);
        break;
      case "last":
        this.loadPag("https://api.attackontitanapi.com/characters?page=" + 42);
        break;
      default:
        break;
    }
  }

  private loadPag(pag: string){
    this.data.reloadPagAOT(pag).subscribe({
      next: (datos: ApiAOT) =>{

        this.personajes = datos;
      }, 
      error: (err: string) =>{
        console.log(err);
      }, 
      complete: () =>{
        console.log("Complete");
      }
    })
  }


}



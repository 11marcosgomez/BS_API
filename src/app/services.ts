
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiAOT, Result } from "./common/api-aot";


@Injectable({
    providedIn: 'root'
  })

export class Services {

    constructor(private http: HttpClient) { }
    loadAOT(): Observable <ApiAOT>{
      return this.http.get<ApiAOT>("https://api.attackontitanapi.com/characters"); 
    }
    /*loadPersonajesAOT(id: string): Observable <DataPersonajillo>{
      return this.http.get<DataPersonajillo>("https://api.attackontitanapi.com/characters/" + id);
    }*/
    reloadPagAOT(pag: string): Observable <ApiAOT>{
      return this.http.get<ApiAOT>(pag);
    }
   
}

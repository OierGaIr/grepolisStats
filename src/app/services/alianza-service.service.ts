import { Injectable } from '@angular/core';
import { GLOBALS } from '../../globals/globals';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlianzaServiceService {
  API_JUGADORES: string = GLOBALS.API_URI + GLOBALS.URI_ALIANZAS;

  constructor(private _http: HttpClient) { }

  public getAlianzas(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/api/alianzas");
  }
}

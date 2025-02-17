import { Injectable } from '@angular/core';
import { GLOBALS } from '../../globals/globals';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorServiceService {
  API_JUGADORES: string = GLOBALS.API_URI + GLOBALS.URI_JUGADORES;

  constructor(private _http: HttpClient) { }

  public getJugadores(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/api/jugadores");
  }
}

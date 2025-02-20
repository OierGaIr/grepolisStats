import { Injectable } from '@angular/core';
import { GLOBALS } from '../../globals/globals';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateCiudad } from '../../models/Ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadServiceService {
  API_CIUDADES: string = GLOBALS.API_URI + GLOBALS.URI_CIUDADES;

  constructor(private _http: HttpClient) { }
 public getCiudades(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/api/ciudades");
  }
  public createCiudad(createCiudad:CreateCiudad) : Observable<any>{
    return this._http.post<CreateCiudad>("http://localhost:8080/api/ciudades",{createCiudad});
  }
}

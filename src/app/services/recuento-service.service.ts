import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBALS } from '../../globals/globals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecuentoServiceService {
  API_RECUENTO: string = GLOBALS.API_URI + GLOBALS.URI_RECUENTOS;

  constructor(private _http: HttpClient) { }
 public getRecuentos(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/api/recuentos");
  }
}

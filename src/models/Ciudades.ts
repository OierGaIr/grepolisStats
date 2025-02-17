import { Jugador } from "./Jugador";

export interface Ciudad{
    id:number,
    nombre:string,
    tipoCiudad:string,
    puntos:number,
    jugador:Jugador
}
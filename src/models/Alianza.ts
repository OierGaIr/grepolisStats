import { Jugador } from "./Jugador";

export interface Alianza{
    id:number,
    nombre:string,
    lider:number
}
export interface CreateAlianza{
   
    nombre:string,
    lider:number
}
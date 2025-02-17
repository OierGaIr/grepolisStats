import { Component } from '@angular/core';
import { Jugador } from '../../../models/Jugador';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-jugador',
  standalone: false,
  templateUrl: './crear-jugador.component.html',
  styleUrl: './crear-jugador.component.css'
})
export class CrearJugadorComponent {
  jugadores: Jugador[] = [
    { id: 1, nombre: 'Jugador 1', countCiudades: 10, senado: 'Roma', alianza: 2 },
    { id: 2, nombre: 'Jugador 2', countCiudades: 8, senado: 'Atenas', alianza: 1 },
    { id: 3, nombre: 'Jugador 3', countCiudades: 12, senado: 'Esparta', alianza: 3 },
    { id: 4, nombre: 'Jugador 4', countCiudades: 5, senado: 'Corinto', alianza: 2 },
    { id: 5, nombre: 'Jugador 5', countCiudades: 7, senado: 'Tebas', alianza: 1 }
  ];

  nuevoJugador: Jugador = {
    id: 0,
    nombre: '',
    countCiudades: 0,
    senado: '',
    alianza: 0
  };

  onSubmit() {
    if (this.nuevoJugador.nombre && this.nuevoJugador.countCiudades && this.nuevoJugador.senado && this.nuevoJugador.alianza) {
      const newJugador: Jugador = {
        id: this.jugadores.length + 1,
        nombre: this.nuevoJugador.nombre,
        countCiudades: this.nuevoJugador.countCiudades,
        senado: this.nuevoJugador.senado,
        alianza: this.nuevoJugador.alianza
      };
      this.jugadores.push(newJugador);
      this.nuevoJugador = { id: 0, nombre: '', countCiudades: 0, senado: '', alianza: 0 };
    }
  }
}

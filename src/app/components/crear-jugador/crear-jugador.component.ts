import { Component } from '@angular/core';
import { Jugador } from '../../../models/Jugador';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlianzaServiceService } from '../../services/alianza-service.service';
import { Alianza } from '../../../models/Alianza';

@Component({
  selector: 'app-crear-jugador',
  standalone: false,
  templateUrl: './crear-jugador.component.html',
  styleUrl: './crear-jugador.component.css'
})
export class CrearJugadorComponent {
  constructor(private alianzaService: AlianzaServiceService) { }

  alianzas: Alianza[
  ];

  ngOnInit(): void {
    this.loadAlianza();
  }
  loadAlianza(): void {
    this.alianzaService.getAlianzas().subscribe(
      {
        next: (data) => {
          this.alianzas = data;
        },
        error: (error) => {

        },
        complete: () => { }
      }

    );
  }
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
    console.log(this.jugadores);
    if (this.nuevoJugador.nombre) {
      const newJugador: Jugador = {
        id: this.jugadores.length + 1,
        nombre: this.nuevoJugador.nombre,
        countCiudades: this.nuevoJugador.countCiudades,
        senado: this.nuevoJugador.senado,
        alianza: this.nuevoJugador.alianza
      };
      console.log(newJugador)
      this.jugadores.push(newJugador);
      this.nuevoJugador = { id: 0, nombre: '', countCiudades: 0, senado: '', alianza: 0 };
      console.log(this.jugadores);
    }
  }
}

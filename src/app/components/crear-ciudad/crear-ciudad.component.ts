import { Component } from '@angular/core';
import { Ciudad, CreateCiudad } from '../../../models/Ciudad';
import { CiudadServiceService } from '../../services/ciudad-service.service';
import { NgForm } from '@angular/forms';
import { RecuentoServiceService } from '../../services/recuento-service.service';
import { Recuento } from '../../../models/Recuento';
import { JugadorServiceService } from '../../services/jugador-service.service';
import { Jugador } from '../../../models/Jugador';

@Component({
  selector: 'app-crear-ciudad',
  standalone: false,
  templateUrl: './crear-ciudad.component.html',
  styleUrl: './crear-ciudad.component.css'
})
export class CrearCiudadComponent {
  constructor(private ciudadService: CiudadServiceService,
    private recuentoService: RecuentoServiceService,
    private jugadorService: JugadorServiceService
  ) { }



  recuentos: Recuento[];
  ngOnInit(): void {
    this.loadRecuentos();
    this.loadJugadores();
  }
  loadRecuentos(): void {
    this.recuentoService.getRecuentos().subscribe(
      {
        next: (data) => {
          this.recuentos = data;
        },
        error: (error) => {

        },
        complete: () => { }
      }

    );
  }
  jugadores: Jugador[];
  loadJugadores(): void {
    this.jugadorService.getJugadores().subscribe(
      {
        next: (data) => {
          this.jugadores = data;
        },
        error: (error) => {

        },
        complete: () => { }
      }

    );
  }

  nuevaCiudad: Ciudad = {
    id: 0,
    nombre: '',
    puntos: 0,
    tipoCiudad: "OFF",
    jugador: 1

  };

  onSubmit(form: NgForm) {

    if (this.nuevaCiudad.nombre) {
      const newCiudad: CreateCiudad = {
        nombre: this.nuevaCiudad.nombre,
        puntos: this.nuevaCiudad.puntos,
        tipoCiudad: this.nuevaCiudad.tipoCiudad,
        jugador: this.nuevaCiudad.jugador
      }
      this.ciudadService.createCiudad(newCiudad);
      form.reset();
    }
  }
}

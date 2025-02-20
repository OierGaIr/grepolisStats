import { Component } from '@angular/core';
import { AlianzaServiceService } from '../../services/alianza-service.service';
import { JugadorServiceService } from '../../services/jugador-service.service';
import { Alianza, CreateAlianza } from '../../../models/Alianza';
import { Jugador } from '../../../models/Jugador';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-alianza',
  standalone: false,
  templateUrl: './crear-alianza.component.html',
  styleUrl: './crear-alianza.component.css'
})
export class CrearAlianzaComponent {
  constructor(private alianzaService: AlianzaServiceService,
    private jugadorService:JugadorServiceService
  ) { }

  alianzas: Alianza[
  ];
  jugadores:Jugador[];

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
 

  nuevaAlianza: Alianza = {
    id: 0,
    nombre: '',
    lider : 0
  };

  onSubmit(form: NgForm) {
    console.log(this.jugadores);
    if (this.nuevaAlianza.nombre) {
      const newAlianza: CreateAlianza = {
        nombre: this.nuevaAlianza.nombre,
        lider: this.nuevaAlianza.lider
      };
      console.log(newAlianza)
      this.alianzaService.createAlianza(newAlianza);
      form.reset();

      console.log(this.jugadores);
    }
  }
}

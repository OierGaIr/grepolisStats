import { Component, OnInit } from '@angular/core';
import { JugadorServiceService } from '../../services/jugador-service.service';
import { Jugador } from '../../../models/Jugador';
import { Alianza } from '../../../models/Alianza';

@Component({
  selector: 'app-listar-jugadores',
  standalone: false,
  templateUrl: './listar-jugadores.component.html',
  styleUrl: './listar-jugadores.component.css'
})
export class ListarJugadoresComponent implements OnInit {
  constructor(private jugadorService: JugadorServiceService) { }

  jugadores: Jugador[
  
  ];

  ngOnInit(): void {
   this.loadJugadores();
  }
  loadJugadores(): void {
    this.jugadorService.getJugadores().subscribe(
      {
        next: (data) => {
          this.jugadores = data;
          console.log(data)
        },
        error: (error) => { },
        complete: () => { }
      }

    );
  }

  
}

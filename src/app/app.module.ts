import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarJugadoresComponent } from './components/listar-jugadores/listar-jugadores.component';
import { ShowJugadorComponent } from './components/show-jugador/show-jugador.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SendadoComponent } from './components/sendado/sendado.component';
import { CrearJugadorComponent } from './components/crear-jugador/crear-jugador.component';
import { CrearCiudadComponent } from './components/crear-ciudad/crear-ciudad.component';
import { CrearAlianzaComponent } from './components/crear-alianza/crear-alianza.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarJugadoresComponent,
    ShowJugadorComponent,
    NavbarComponent,
    SendadoComponent,
    CrearJugadorComponent,
    CrearCiudadComponent,
    CrearAlianzaComponent
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

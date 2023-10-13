import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/utilidades/nabvar/nabvar.component';
import { HomeComponent } from './components/utilidades/home/home.component';
import { FooterComponent } from './components/utilidades/footer/footer.component';
import { PageMesiComponent } from './components/utilidades/page-mesi/page-mesi.component';
import { PageRonaldoComponent } from './components/utilidades/page-ronaldo/page-ronaldo.component';
import { PageJamesComponent } from './components/utilidades/page-james/page-james.component';

import { FutbolService } from './components/service/futbol-DiazArias.service';

import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    HomeComponent,
    FooterComponent,
    PageMesiComponent,
    PageRonaldoComponent,
    PageJamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    FutbolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

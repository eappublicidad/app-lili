import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

// componentes de las páginas
import { FooterComponent } from './globals/footer/footer.component';
import { HeaderComponent } from './globals/header/header.component';
import { SectionComponent } from './pages/home/componentes/section/section.component';
import { SliderComponent } from './pages/home/componentes/slider/slider.component';
// paginas
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';

// rutas, putas rutas


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    SectionComponent,
    HomeComponent,
    ServiciosComponent,
    QuienesComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

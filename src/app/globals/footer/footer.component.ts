import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio:number ;
  frase:any;
  mostrar = true;
  constructor() {
    this.anio = new Date().getFullYear(),
    this.frase = "Gracias por visitarnos, espero verte pronto";
  }


}

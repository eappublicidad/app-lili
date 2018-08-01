import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit{
  img: any=[];
  constructor() {
    this.img=[{
      "banner1":"assets/tooth.jpg",
      banner2:"assets/tooth2.jpg",
      banner3:"assets/tooth3.jpg"
    }]

}

  ngOnInit() {



  }


}

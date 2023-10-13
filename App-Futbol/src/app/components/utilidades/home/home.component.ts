import { Component, OnInit } from '@angular/core';
import { FutbolService, Futbol1 } from '../../service/futbol-DiazArias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   futbol:Futbol1[]=[];

    constructor (private _futbolService:FutbolService){}

    ngOnInit(): void{

      this.futbol=this._futbolService.getFutbol();
      console.log(this.futbol)
    }

}

import { Component } from '@angular/core';
import { FutbolService, Futbol1 } from '../../service/futbol-DiazArias.service';

@Component({
  selector: 'app-page-james',
  templateUrl: './page-james.component.html',
  styleUrls: ['./page-james.component.css']
})
export class PageJamesComponent {

  futbol:Futbol1[]=[];

  constructor (private _futbolService:FutbolService){}

  ngOnInit(): void{

    this.futbol=this._futbolService.getFutbol();
    console.log(this.futbol)
  }
}

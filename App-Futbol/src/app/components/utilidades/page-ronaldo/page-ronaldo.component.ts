import { Component } from '@angular/core';
import { Futbol1, FutbolService } from '../../service/futbol-DiazArias.service';

@Component({
  selector: 'app-page-ronaldo',
  templateUrl: './page-ronaldo.component.html',
  styleUrls: ['./page-ronaldo.component.css']
})
export class PageRonaldoComponent {
  futbol:Futbol1[]=[];
  
  constructor (private _futbolService:FutbolService){}

  ngOnInit(): void{

    this.futbol=this._futbolService.getFutbol();
    console.log(this.futbol)
}
}

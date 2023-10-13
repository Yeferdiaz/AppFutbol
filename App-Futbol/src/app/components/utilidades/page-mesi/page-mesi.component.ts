import { Component } from '@angular/core';
import { Futbol1, FutbolService } from '../../service/futbol-DiazArias.service';

@Component({
  selector: 'app-page-mesi',
  templateUrl: './page-mesi.component.html',
  styleUrls: ['./page-mesi.component.css']
})
export class PageMesiComponent {

  futbol:Futbol1[]=[];
  
  constructor (private _futbolService:FutbolService){}

  ngOnInit(): void{

    this.futbol=this._futbolService.getFutbol();
    console.log(this.futbol)
}
}
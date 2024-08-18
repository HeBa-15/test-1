import { Component } from '@angular/core';
import { pid } from 'process';


interface item{
  Id:number,
  Img:string
}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  itemList:item[]=[
    {Id:0,Img:"assets/poert1.png"},
    {Id:1,Img:"assets/port2.png"},
    {Id:2,Img:"assets/port3.png"},
    {Id:3,Img:"assets/poert1.png"},
    {Id:4,Img:"assets/port2.png"},
    {Id:5,Img:"assets/port3.png"},
  ]
  modelImg:string='';

  flag:boolean=true;

  hideModel(item:EventTarget|null,img:HTMLImageElement):void{
    if(item==img){
      return;
    }
    else{
      this.flag=true
    }

  }
}   

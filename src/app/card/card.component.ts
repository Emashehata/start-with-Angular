 import { Component, Input } from '@angular/core';
 interface Iproduct{
  id:string;
  title:string;
  description:string;
  imageCover:string;
  price:number;
  quantity:number;
  images:string[];
  onSale:boolean;
}
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
      @Input({required:true}) products :Iproduct ={} as Iproduct;
}

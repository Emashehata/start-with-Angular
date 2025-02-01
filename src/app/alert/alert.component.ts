import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @ContentChild('ref') myElement!:ElementRef;
  showContentChild():void{
    console.log(this.myElement);

  }
}

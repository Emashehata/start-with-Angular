import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
    status:string='on sale';
    showStatus():void{
       alert(this.status);

    }
    @Input() dataFromParent:string="";

   @Output() itemEvent:EventEmitter<string> =new EventEmitter();

   onFireEvent():void{
    this.itemEvent.emit('data from child to parent');
   }

}

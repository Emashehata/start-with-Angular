import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  animate(event: Event, abc: HTMLLabelElement): void {
    const input = event.target as HTMLInputElement;

    // Check if the input has any value
    if (input.value.trim()) {
      abc.classList.replace("d-none", "d-block");
    } else {
      abc.classList.replace("d-block", "d-none");
    }
  }

}

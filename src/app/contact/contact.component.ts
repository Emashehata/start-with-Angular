import { PostsService } from './../posts.service';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: 'app-contact',
  imports: [AlertComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  animate(event: Event, abc: HTMLLabelElement): void {
    const input = event.target as HTMLInputElement;

    // Check if the input has any value
    if (input.value.trim()) {
      abc.classList.replace("d-none", "d-block");
    } else {
      abc.classList.replace("d-block", "d-none");
    }
  }
  private readonly postsService=inject( PostsService);
  ngOnInit(): void {
    let x = new Promise(()=>{
      console.log('%c PROMISE','color:#09c');
      this.postsService.getPosts().subscribe({
        next:(res)=>{
            console.log(res);

        },
        error:()=>{
          console.log('error');

        }
      });
    })

    let y= new Observable(()=>{
      console.log('%c obersevable','color:tomato');
    })
    y.subscribe();
  }

}

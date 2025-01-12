import { Component, OnInit,HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
    constructor(){
    }
    navChange=false;
    ngOnInit(): void {

    }
    @HostListener("document:scroll")
    scrollfunction(){
      if(document.body.scrollTop >0 || document.documentElement.scrollTop >0){
        this.navChange=true;
      }
      else{
        this.navChange=false;
      }
    }
}

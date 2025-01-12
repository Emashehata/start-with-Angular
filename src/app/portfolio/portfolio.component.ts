import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  cards:string[]=[
    "/imgs/poert1.png",
    "/imgs/port2.png",
    "/imgs/port3.png",
    "/imgs/port2.png",
    "/imgs/port3.png",
    "/imgs/poert1.png",
  ];
  selectedIndex: number | null = null;


  onImageClick(index: number): void {
    this.selectedIndex = index;
  }

  nextImage(): void {
    if (this.selectedIndex !== null) {
      this.selectedIndex = (this.selectedIndex + 1) % this.cards.length;
    }
  }

  prevImage(): void {
    if (this.selectedIndex !== null) {
      this.selectedIndex = (this.selectedIndex - 1 + this.cards.length) % this.cards.length;
    }
  }

  getSelectedImage(): string | null {
    if (this.selectedIndex !== null) {
      return this.cards[this.selectedIndex];
    }
    return null;
  }
}

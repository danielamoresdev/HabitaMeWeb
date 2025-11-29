import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-como-funciona',
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.css']
})
export class ComoFuncionaComponent {
  isVisible: boolean[] = [false, false, false];

  @HostListener('window:scroll', [])
  onScroll() {
    const cards = document.querySelectorAll('.step');
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 150) {
        this.isVisible[index] = true;
      }
    });
  }
}

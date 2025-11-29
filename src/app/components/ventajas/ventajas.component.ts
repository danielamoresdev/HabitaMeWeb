import { Component, HostListener } from '@angular/core';

/**
 * Componente que muestra las ventajas en forma de tarjetas (cards).
 * Cada tarjeta se hace visible mediante una animación cuando entra en el viewport
 * al hacer scroll.
 */
@Component({
  selector: 'app-ventajas',
  templateUrl: './ventajas.component.html',
  styleUrls: ['./ventajas.component.css']
})
export class VentajasComponent {

  /**
   * Array que indica qué tarjetas deben mostrarse con animación.
   * Cada posición del array corresponde a una card del template.
   */
  isVisible: boolean[] = [false, false, false, false];

  /**
   * Detecta el evento de scroll de la ventana.
   * Cuando una tarjeta entra parcialmente en el viewport (150px antes del final),
   * se marca como visible para activar su animación.
   */
  @HostListener('window:scroll', [])
  onScroll() {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const triggerPoint = window.innerHeight - 150;

      // Si la card ya es visible, no se vuelve a calcular
      if (this.isVisible[index]) return;

      // Si la parte superior de la card entra en la zona visible
      if (rect.top < triggerPoint) {
        this.isVisible[index] = true;
      }
    });
  }
}

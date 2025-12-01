import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  /** Indica si la página ha sido desplazada para cambiar estilos */
  isScrolled = false;

  /** Oculta el footer en ciertas rutas, como la página de login */
  hideFooter = false;

  /**
   * Constructor que inyecta el Router
   * y se suscribe a cambios de ruta para ocultar el footer
   * en páginas específicas
   * @param router Router de Angular
   */
  constructor(private readonly router: Router) {
    // Detectar cambios de ruta
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Ocultar footer si estamos en la ruta /login
        this.hideFooter = event.urlAfterRedirects.includes('/login');
      });
  }

  /**
   * Desplaza suavemente la página hasta un elemento por su id.
   * Si no estamos en la página principal, redirige a ella y luego hace scroll.
   * @param sectionId id del elemento a desplazar
   */
  scrollTo(sectionId: string) {
    const currentUrl = this.router.url;

    if (currentUrl === '/' || currentUrl.startsWith('/home')) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigateByUrl(`/#${sectionId}`);
    }
  }

  /**
   * Detecta el scroll de la ventana para actualizar la variable isScrolled
   * y poder aplicar estilos dinámicos al footer si es necesario
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }
}

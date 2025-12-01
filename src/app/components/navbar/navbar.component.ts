import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

/**
 * Componente que gestiona la barra de navegación principal.
 * Incluye comportamiento responsive, detección de scroll
 * y scroll suave hacia secciones de la página.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterModule, CommonModule]
})
export class NavbarComponent {

  /** Estado del menú hamburguesa en móviles */
  menuOpen = false;

  /** Indica si el usuario ha hecho scroll para cambiar el estilo del navbar */
  isScrolled = false;
  hideNavbar: any;

  constructor(private readonly router: Router) {
    // Detectar cambios de ruta
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.hideNavbar = event.urlAfterRedirects.includes('/login');
    });
  }

  /**
   * Abre o cierra el menú móvil.
   */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Desplaza suavemente hacia una sección si ya estás en la página principal.
   * Si no estás en la home, redirige a ella con un hash para que el scroll
   * se realice al cargar.
   *
   * @param sectionId - El id del elemento al que se quiere hacer scroll.
   */
  scrollTo(sectionId: string) {
    this.menuOpen = false;
    const currentUrl = this.router.url;

    // Si estamos en la home, hacer scroll directamente
    if (currentUrl === '/' || currentUrl.startsWith('/home')) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si no, redirigir con hash
      this.router.navigateByUrl(`/#${sectionId}`);
    }
  }

  /**
   * Detecta el scroll en la ventana para cambiar el estilo del navbar
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }
}

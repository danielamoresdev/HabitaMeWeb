import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

/**
 * Interface que define la estructura de una propiedad
 * mostrada en la página de habitaciones.
 */
interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
}

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css'],

  /**
   * IMPORTS NECESARIOS:
   * - CommonModule → permite usar *ngFor, *ngIf, etc.
   * - CurrencyPipe → permite formatear precios en la plantilla
   */
  imports: [CommonModule, CurrencyPipe]
})
export class PropertiesPageComponent {

  /**
   * Lista de propiedades simuladas para mostrar ejemplos en pantalla.
   * En un proyecto real, estos datos vendrían de una API o servicio.
   */
  properties: Property[] = [
    {
      id: 1,
      title: 'Habitación luminosa en centro',
      location: 'Madrid, Malasaña',
      price: 450,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://www.viacelere.com/wp-content/uploads/old-blog/2023/09/Como-decorar-una-habitacion-pequena_03.jpg'
    },
    {
      id: 2,
      title: 'Habitación moderna con ventanal',
      location: 'Barcelona, Eixample',
      price: 520,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://lagrama.es/wp-content/uploads/2018/09/cebecero-homage-colgado-habitacion-lagrama.jpg'
    },
    {
      id: 3,
      title: 'Habitación tranquila cerca metro',
      location: 'Valencia, Ruzafa',
      price: 400,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://www.hofmann.es/content/blog/uploads/2018/02/decoracion-habitacion.jpg?w=900'
    },
    {
      id: 4,
      title: 'Habitación espaciosa y minimalista',
      location: 'Sevilla, Triana',
      price: 480,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://metrovacesa.com/wp-content/uploads/2025/04/cuartos-aesthetic.jpg'
    },
    {
      id: 5,
      title: 'Habitación con estilo boutique',
      location: 'Granada, Centro Histórico',
      price: 530,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://www.livitum.com/blogs/9/8/9/tx_e0ded26b-7a1d-46ac-b08b-63fb12787321_habitacion_juvenil_pequena_ideas_13.jpg'
    },
    {
      id: 6,
      title: 'Cuarto acogedor en piso compartido',
      location: 'Bilbao, Casco Viejo',
      price: 420,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://planner5d.com/blog/content/images/2025/06/medidas.dormitorio.estandar.jpg'
    },
    {
      id: 7,
      title: 'Habitación moderna y minimalista',
      location: 'Málaga, Centro',
      price: 500,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://muebles-lara.es/blog/wp-content/uploads/2020/11/Cabezal-Malta-La-Premier.jpg'
    },
    {
      id: 8,
      title: 'Habitación céntrica con luz natural',
      location: 'Zaragoza, Delicias',
      price: 470,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://www.livitum.com/moderna-habitacion-juvenil-en-blanco/4825/render/tt_5548_219882.jpg'
    }
  ];

  /**
   * Inyectamos el router para poder navegar a la página
   * de detalles cuando el usuario pulse en una propiedad.
   */
  constructor(private readonly router: Router) {}

  /**
   * Navega a la página de detalles de la propiedad seleccionada.
   * @param id ID de la propiedad seleccionada
   */
  verDetalles(id: number) {
    this.router.navigate(['/property', id]);
  }
}

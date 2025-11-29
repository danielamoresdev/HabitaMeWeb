import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';

/**
 * Interfaz que representa una propiedad con datos básicos como
 * título, ubicación, precio y características.
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

/**
 * Componente que muestra el detalle de una propiedad seleccionada.
 * Obtiene el ID desde la URL, busca la propiedad correspondiente
 * en un listado local y la muestra al usuario.
 */
@Component({
  selector: 'app-property-detail',
  standalone: true,
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
  imports: [CommonModule, CurrencyPipe]
})
export class PropertyDetailComponent implements OnInit {

  /** Propiedad seleccionada extraída según el ID recibido en la ruta */
  property!: Property;

  /**
   * Lista de propiedades disponibles temporalmente en el componente.
   * En producción vendría desde un servicio HTTP o un estado global.
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

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}

  /**
   * Obtiene el parámetro "id" de la URL y carga la propiedad correspondiente.
   */
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.property = this.properties.find(p => p.id === id)!;
  }

  /**
   * Navega de vuelta a la página de propiedades.
   */
  volver() {
    this.router.navigate(['/propiedades']);
  }
}
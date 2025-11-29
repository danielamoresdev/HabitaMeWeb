import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { AboutComponent } from "../../components/about/about.component";
import { ComoFuncionaComponent } from "../../components/como-funciona/como-funciona.component";
import { VentajasComponent } from "../../components/ventajas/ventajas.component";
import { ContactoComponent } from "../../components/contacto/contacto.component";

@Component({
  selector: 'app-home-page',
  imports: [HeroComponent, AboutComponent, ComoFuncionaComponent, VentajasComponent, ContactoComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {

}

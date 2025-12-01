import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';
import { PropertiesPageComponent } from './pages/properties-page.component/properties-page.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'HabitaMe – Encuentra tu habitación ideal'
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'contacto',
    component: ContactoPageComponent,
    title: 'HabitaMe – Contacta con nuestro equipo'
  },
  {
    path: 'propiedades',
    component: PropertiesPageComponent,
    title: 'HabitaMe – Propiedades disponibles'
  },
  { path: 'property/:id',
    component: PropertyDetailComponent,
    title: 'HabitaMe – Propiedad'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'HabitaMe - Login'
  }
];
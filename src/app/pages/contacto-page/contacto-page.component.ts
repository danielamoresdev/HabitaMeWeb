import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Componente de la página de contacto.
 * Permite al usuario enviar un formulario con nombre, email y mensaje.
 * Realiza validaciones básicas antes de permitir el envío.
 */
@Component({
  selector: 'app-contacto-page',
  templateUrl: './contacto-page.component.html',
  imports: [FormsModule],
  styleUrls: ['./contacto-page.component.css']
})
export class ContactoPageComponent {

  /** Nombre del usuario */
  nombre = '';

  /** Correo electrónico del usuario */
  email = '';

  /** Mensaje que envía el usuario */
  mensaje = '';

  /**
   * Envía el formulario solo si pasa las validaciones.
   * - Comprueba que los campos no estén vacíos.
   * - Valida el formato del email.
   * - Muestra un mensaje de éxito.
   * Después limpia los campos.
   */
  enviarFormulario() {
    if (!this.nombre || !this.email || !this.mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }

    if (!this.validarEmail(this.email)) {
      alert('Por favor introduce un correo electrónico válido.');
      return;
    }

    alert('¡Mensaje enviado! Nos pondremos en contacto contigo.');
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }

  /**
   * Valida el formato de un correo electrónico.
   * @param email Email a validar.
   * @returns true si el email tiene un formato válido, false si no.
   */
  validarEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
}

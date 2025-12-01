import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  imports: [FormsModule, CommonModule, RouterModule]
})
export class LoginPageComponent {
  /** Indica si se muestra el formulario de registro (true) o login (false) */
  isSignup = false;

  // === LOGIN ===
  /** Usuario ingresado en el formulario de login */
  loginUser = '';
  /** Contraseña ingresada en el formulario de login */
  loginPassword = '';

  // === SIGNUP ===
  /** Nombre ingresado en el formulario de registro */
  regName = '';
  /** Apellido ingresado en el formulario de registro */
  regSurname = '';
  /** Usuario ingresado en el formulario de registro */
  regUser = '';
  /** Contraseña ingresada en el formulario de registro */
  regPassword = '';

  constructor(private readonly router: Router) {}

  /**
   * Alterna entre el formulario de login y registro.
   * Limpia los campos de ambos formularios al cambiar.
   */
  toggleForm() {
    this.isSignup = !this.isSignup;
    this.clearInputs();
  }

  /** Limpia todos los campos de los formularios */
  clearInputs() {
    this.loginUser = '';
    this.loginPassword = '';
    this.regName = '';
    this.regSurname = '';
    this.regUser = '';
    this.regPassword = '';
  }

  /**
   * Valida el formulario de login.
   * Muestra alert si algún campo está vacío.
   */
  onLogin() {
    if (!this.loginUser || !this.loginPassword) {
      alert('Por favor rellena todos los campos de inicio de sesión.');
      return;
    }
    alert('Inicio de sesión correcto.');
    this.clearInputs();
  }

  /**
   * Valida el formulario de registro.
   * Muestra alert si algún campo está vacío.
   */
  onSignup() {
    if (!this.regName || !this.regSurname || !this.regUser || !this.regPassword) {
      alert('Por favor rellena todos los campos de registro.');
      return;
    }
    alert('Registro completado.');
    this.clearInputs();
  }

  /** Navega a la página de inicio */
  volverInicio() {
    this.router.navigate(['/']);
  }
}

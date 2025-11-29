import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactoPageComponent } from './contacto-page.component';
import { FormsModule } from '@angular/forms';

describe('ContactoPageComponent', () => {
  let component: ContactoPageComponent;
  let fixture: ComponentFixture<ContactoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoPageComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  // ---------------------------------------
  // VALIDAR EMAIL
  // ---------------------------------------
  it('debería validar un email correcto', () => {
    expect(component.validarEmail('test@example.com')).toBeTrue();
  });

  it('debería rechazar un email incorrecto', () => {
    expect(component.validarEmail('test@')).toBeFalse();
    expect(component.validarEmail('test.com')).toBeFalse();
    expect(component.validarEmail('')).toBeFalse();
  });

  // ---------------------------------------
  // ENVIAR FORMULARIO
  // ---------------------------------------
  it('debería mostrar alerta si faltan campos', () => {
    spyOn(window, 'alert');
    component.enviarFormulario();
    expect(window.alert).toHaveBeenCalledWith('Por favor completa todos los campos.');
  });

  it('debería mostrar alerta si el email es inválido', () => {
    spyOn(window, 'alert');
    component.nombre = 'Daniel';
    component.email = 'correo-malo';
    component.mensaje = 'Hola';

    component.enviarFormulario();

    expect(window.alert).toHaveBeenCalledWith('Por favor introduce un correo electrónico válido.');
  });

  it('debería enviar el formulario correctamente y resetear los campos', () => {
    spyOn(window, 'alert');

    component.nombre = 'Daniel';
    component.email = 'test@example.com';
    component.mensaje = 'Hola';

    component.enviarFormulario();

    expect(window.alert).toHaveBeenCalledWith('¡Mensaje enviado! Nos pondremos en contacto contigo.');
    expect(component.nombre).toBe('');
    expect(component.email).toBe('');
    expect(component.mensaje).toBe('');
  });
});

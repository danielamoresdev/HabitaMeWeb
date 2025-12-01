import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginPageComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isSignup and clear inputs', () => {
    component.loginUser = 'user';
    component.toggleForm();
    expect(component.isSignup).toBeTrue();
    expect(component.loginUser).toBe('');
  });

  it('should clear all input fields', () => {
    component.loginUser = 'user';
    component.loginPassword = 'pass';
    component.regName = 'Name';
    component.clearInputs();
    expect(component.loginUser).toBe('');
    expect(component.loginPassword).toBe('');
    expect(component.regName).toBe('');
  });

  it('should alert if login fields are empty', () => {
    spyOn(globalThis, 'alert');
    component.loginUser = '';
    component.loginPassword = '';
    component.onLogin();
    expect(globalThis.alert).toHaveBeenCalledWith('Por favor rellena todos los campos de inicio de sesión.');
  });

  it('should alert if signup fields are empty', () => {
    spyOn(globalThis, 'alert');
    component.regName = '';
    component.regSurname = '';
    component.regUser = '';
    component.regPassword = '';
    component.onSignup();
    expect(globalThis.alert).toHaveBeenCalledWith('Por favor rellena todos los campos de registro.');
  });

  it('should navigate to home on volverInicio', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.volverInicio();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });
});

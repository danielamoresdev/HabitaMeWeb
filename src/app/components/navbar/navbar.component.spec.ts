import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockRouter: any;

  beforeEach(async () => {
    // Mock manual del Router (permite sobrescribir url)
    mockRouter = {
      url: '/',
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('toggleMenu debería alternar el estado del menú', () => {
    expect(component.menuOpen).toBeFalse();
    component.toggleMenu();
    expect(component.menuOpen).toBeTrue();
    component.toggleMenu();
    expect(component.menuOpen).toBeFalse();
  });

  it('debería navegar a la seccion cuando está en el home', () => {
    mockRouter.url = '/';

    const mockElement = {
      scrollIntoView: jasmine.createSpy('scrollIntoView')
    };

    spyOn(document, 'getElementById').and.returnValue(mockElement as any);

    component.scrollTo('ventajas');

    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('deberia navegar cuando no está en el home', () => {
    mockRouter.url = '/propiedades';

    component.scrollTo('contacto');

    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/#contacto');
  });

  it('deberia cambiar a true isScrolled cuando se hace scroll', () => {
    expect(component.isScrolled).toBeFalse();

    spyOnProperty(window, 'scrollY', 'get').and.returnValue(100);

    component.onWindowScroll();

    expect(component.isScrolled).toBeTrue();
  });
});

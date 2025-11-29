import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertiesPageComponent } from './properties-page.component';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';

/**
 * Suite de tests para comprobar el correcto funcionamiento del componente
 * PropertiesPageComponent, el cual muestra una lista de habitaciones en alquiler
 * y permite navegar al detalle de cada una.
 */
describe('PropertiesPageComponent', () => {

  let component: PropertiesPageComponent;
  let fixture: ComponentFixture<PropertiesPageComponent>;

  // Spy (objeto simulado) para el Router
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    /**
     * Creamos un mock del router utilizando Jasmine.
     * Esto evita que Angular navegue realmente durante los tests,
     * y nos permite comprobar que se llamó al método navigate().
     */
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    /**
     * Configuración del TestBed.
     * Se importa el propio componente porque en Angular 17+ es standalone.
     * Se añade CommonModule y CurrencyPipe por ser dependencias del componente.
     * El Router se sustituye por el mock anterior.
     */
    await TestBed.configureTestingModule({
      imports: [CommonModule, CurrencyPipe, PropertiesPageComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    // Se crea la instancia del componente
    fixture = TestBed.createComponent(PropertiesPageComponent);
    component = fixture.componentInstance;

    // Detecta cambios para inicializar el template y el ciclo de vida
    fixture.detectChanges();
  });

  /**
   * Test básico para comprobar que el componente se crea correctamente.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Comprueba que la lista de propiedades se carga correctamente.
   * Este componente tiene un array inicial de 8 habitaciones,
   * por lo que solo se verifica que haya al menos una.
   */
  it('should load a list of properties', () => {
    expect(component.properties.length).toBeGreaterThan(0);
  });

  /**
   * Verifica que el método verDetalles() llama correctamente
   * a router.navigate() con el ID de la propiedad seleccionada.
   */
  it('should navigate to the property detail page when verDetalles is called', () => {
    const testId = 3;

    // Se llama al método
    component.verDetalles(testId);

    // El Router mock debe haber recibido la llamada con la ruta correcta
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/property', testId]);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertyDetailComponent } from './property-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('PropertyDetailComponent', () => {
  let component: PropertyDetailComponent;
  let fixture: ComponentFixture<PropertyDetailComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [PropertyDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '3' // Mock: ID = 3
              }
            }
          }
        },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar la propiedad correcta usando el ID de la ruta', () => {
    expect(component.property).toBeTruthy();
    expect(component.property.id).toBe(3);
    expect(component.property.title).toContain('Ruzafa');
  });

  it('debería manejar un ID inexistente sin romper', () => {
    const route = TestBed.inject(ActivatedRoute);
    spyOn(route.snapshot.paramMap, 'get').and.returnValue('999');

    component.ngOnInit();

    expect(component.property).toBeUndefined();
  });

  it('debería navegar a /propiedades al llamar volver()', () => {
    component.volver();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/propiedades']);
  });
});

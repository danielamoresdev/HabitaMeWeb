import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VentajasComponent } from './ventajas.component';

describe('VentajasComponent', () => {
  let component: VentajasComponent;
  let fixture: ComponentFixture<VentajasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentajasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VentajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  // ------------------------------
  // MOCK DEL DOM
  // ------------------------------
  function mockCards(inViewIndices: number[] = []) {
    const mockElements: any[] = [];

    for (let i = 0; i < 4; i++) {
      mockElements.push({
        getBoundingClientRect: () => ({
          top: inViewIndices.includes(i) ? 100 : 9999 // 100 = visible, 9999 = fuera
        })
      });
    }

    spyOn(document, 'querySelectorAll').and.returnValue(mockElements as any);
  }

  it('no debería activar ninguna card si ninguna está visible', () => {
    mockCards([]); // Ninguna visible
    component.onScroll();
    expect(component.isVisible).toEqual([false, false, false, false]);
  });

  it('debería activar únicamente las cards visibles', () => {
    mockCards([0, 2]); // Solo se "ven" la card 0 y 2
    component.onScroll();
    expect(component.isVisible).toEqual([true, false, true, false]);
  });

  it('debería ignorar cards ya visibles y no recalcularlas', () => {
    component.isVisible = [true, false, false, false];
    mockCards([1]); // Solo card 1 visible
    component.onScroll();
    expect(component.isVisible).toEqual([true, true, false, false]);
  });

});

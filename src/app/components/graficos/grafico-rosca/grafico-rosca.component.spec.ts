import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoRoscaComponent } from './grafico-rosca.component';

describe('GraficoRoscaComponent', () => {
  let component: GraficoRoscaComponent;
  let fixture: ComponentFixture<GraficoRoscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoRoscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoRoscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

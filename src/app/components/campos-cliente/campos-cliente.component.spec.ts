import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposClienteComponent } from './campos-cliente.component';

describe('CamposClienteComponent', () => {
  let component: CamposClienteComponent;
  let fixture: ComponentFixture<CamposClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamposClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamposClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

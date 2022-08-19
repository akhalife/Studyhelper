import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivateComponent } from './derivate.component';

describe('DerivateComponent', () => {
  let component: DerivateComponent;
  let fixture: ComponentFixture<DerivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DerivateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

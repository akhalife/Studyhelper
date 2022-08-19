import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AussagenlogikComponent } from './aussagenlogik.component';

describe('AussagenlogikComponent', () => {
  let component: AussagenlogikComponent;
  let fixture: ComponentFixture<AussagenlogikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AussagenlogikComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AussagenlogikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

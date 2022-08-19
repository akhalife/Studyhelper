import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraedikatenlogikComponent } from './praedikatenlogik.component';

describe('PraedikatenlogikComponent', () => {
  let component: PraedikatenlogikComponent;
  let fixture: ComponentFixture<PraedikatenlogikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PraedikatenlogikComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PraedikatenlogikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

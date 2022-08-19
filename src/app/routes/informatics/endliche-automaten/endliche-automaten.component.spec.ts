import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndlicheAutomatenComponent } from './endliche-automaten.component';

describe('EndlicheAutomatenComponent', () => {
  let component: EndlicheAutomatenComponent;
  let fixture: ComponentFixture<EndlicheAutomatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndlicheAutomatenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EndlicheAutomatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

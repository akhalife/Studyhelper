import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathOverviewComponent } from './math-overview.component';

describe('MathOverviewComponent', () => {
  let component: MathOverviewComponent;
  let fixture: ComponentFixture<MathOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MathOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MathOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticsOverviewComponent } from './informatics-overview.component';

describe('InformaticsOverviewComponent', () => {
  let component: InformaticsOverviewComponent;
  let fixture: ComponentFixture<InformaticsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformaticsOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InformaticsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

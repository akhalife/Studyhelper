import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticsNavComponent } from './informatics-nav.component';

describe('InformaticsNavComponent', () => {
  let component: InformaticsNavComponent;
  let fixture: ComponentFixture<InformaticsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformaticsNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InformaticsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

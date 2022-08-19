import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnixComponent } from './unix.component';

describe('UnixComponent', () => {
  let component: UnixComponent;
  let fixture: ComponentFixture<UnixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnixComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

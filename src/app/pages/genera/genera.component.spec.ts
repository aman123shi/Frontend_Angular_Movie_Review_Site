import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraComponent } from './genera.component';

describe('GeneraComponent', () => {
  let component: GeneraComponent;
  let fixture: ComponentFixture<GeneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

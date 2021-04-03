import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladasComponent } from './saladas.component';

describe('SaladasComponent', () => {
  let component: SaladasComponent;
  let fixture: ComponentFixture<SaladasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

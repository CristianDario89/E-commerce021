import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonInfoComponent } from './json-info.component';

describe('JsonInfoComponent', () => {
  let component: JsonInfoComponent;
  let fixture: ComponentFixture<JsonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

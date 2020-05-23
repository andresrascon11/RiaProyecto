import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeradorComponent } from './refrigerador.component';

describe('RefrigeradorComponent', () => {
  let component: RefrigeradorComponent;
  let fixture: ComponentFixture<RefrigeradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrigeradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

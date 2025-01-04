import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgComponent } from './bolg.component';

describe('BolgComponent', () => {
  let component: BolgComponent;
  let fixture: ComponentFixture<BolgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

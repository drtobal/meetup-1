import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSecondComponent } from './index-second.component';

describe('IndexSecondComponent', () => {
  let component: IndexSecondComponent;
  let fixture: ComponentFixture<IndexSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

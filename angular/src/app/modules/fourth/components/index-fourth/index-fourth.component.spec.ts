import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFourthComponent } from './index-fourth.component';

describe('IndexSecondComponent', () => {
  let component: IndexFourthComponent;
  let fixture: ComponentFixture<IndexFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexFourthComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

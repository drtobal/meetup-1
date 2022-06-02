import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexThirdComponent } from './index-third.component';

describe('IndexSecondComponent', () => {
  let component: IndexThirdComponent;
  let fixture: ComponentFixture<IndexThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexThirdComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

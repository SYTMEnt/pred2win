import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionTransactionComponent } from './prediction-transaction.component';

describe('PredictionTransactionComponent', () => {
  let component: PredictionTransactionComponent;
  let fixture: ComponentFixture<PredictionTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredictionTransactionComponent]
    });
    fixture = TestBed.createComponent(PredictionTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

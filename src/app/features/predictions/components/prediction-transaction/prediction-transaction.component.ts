import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Predictions } from 'src/app/store/predictions/types';

@Component({
  selector: 'app-prediction-transaction',
  templateUrl: './prediction-transaction.component.html',
  styleUrls: ['./prediction-transaction.component.scss']
})
export class PredictionTransactionComponent {
    @Input() prediction!: Predictions;
}

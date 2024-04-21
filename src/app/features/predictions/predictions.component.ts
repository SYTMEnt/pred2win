import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { PredictionService } from './services/predictions.service';
import { User } from "../../store/auth/types";
import { AuthStoreService } from 'src/app/store/auth/auth-store.service';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent implements OnInit {

    predictions: any;
    loading = false;
    error: string | undefined;

    constructor(
        private predictionService: PredictionService,
        private route: ActivatedRoute,
        private router: Router, 
        private authStoreService: AuthStoreService,
        ) {}

        ngOnInit(): void {
            this.authStoreService.userProfile$
              .pipe(
                take(1) 
              )
              .subscribe(userProfile => {
                if (userProfile) {
                  const userId = userProfile.memberId;
                  this.fetchpredictiontransactions(userId);
                }
              });
          }
      
          fetchpredictiontransactions(userId: string) {
            this.loading = true;
            this.error = undefined;
      
            this.predictionService.predictiontransactions(userId)
              .subscribe(
                (predictions) => {
                  this.predictions = predictions;
                },
                (error) => {
                  this.error = error;
                },
                () => {
                  this.loading = false;
                }
              );
          }
  }

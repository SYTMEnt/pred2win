import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { TransactionService } from './services/transactions.service';
import { User } from "../../store/auth/types";
import { AuthStoreService } from 'src/app/store/auth/auth-store.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

    transactions: any;
    loading = false;
    error: string | undefined;

    constructor(
        private transactionService: TransactionService,
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
                  this.fetchcointransactions(userId);
                }
              });
          }
      
          fetchcointransactions(userId: string) {
            this.loading = true;
            this.error = undefined;
      
            this.transactionService.cointransactions(userId)
              .subscribe(
                (transactions) => {
                  this.transactions = transactions;
                },
                (error) => {
                  this.error = error;
                },
                () => {
                  this.loading = false;
                }
              );
          }

          getCoinImageUrl(balance: number): string {
            if (balance >= 0 && balance <= 200) {
                return 'https://sytm-dev.s3.amazonaws.com/addon/coin-stack/coin-image-0-200.png';
            } else if (balance >= 201 && balance <= 500) {
                return 'https://sytm-dev.s3.amazonaws.com/addon/coin-stack/coin-image-201-500.png';
            } else if (balance >= 501 && balance <= 1500) {
                return 'https://sytm-dev.s3.amazonaws.com/addon/coin-stack/coin-image-501-1500.png';
            } else if (balance >= 1501 && balance <= 3000) {
                return 'https://sytm-dev.s3.amazonaws.com/addon/coin-stack/coin-image-1501-3000.png';
            } else if (balance >= 3001 && balance <= 5000) {
                return 'https://sytm-dev.s3.amazonaws.com/addon/coin-stack/coin-image-3001-5000.png';
            } else {
                return 'https://sytm-dev.s3.amazonaws.com/addon/coin-stack/coin-image-above-5000.png';
            }
        }
        
  }

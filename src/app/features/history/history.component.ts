import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { HistoryService } from './services/historyservices';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { finalize, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  animations: [
    trigger('showChampion', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate('1s', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('showRunnersUp', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })), 
      transition(':enter', [
        animate('1s 3s', style({ opacity: 1, transform: 'translateX(0)' })), 
      ]),
    ]),
  ],
})

export class HistoryComponent implements OnDestroy {
    tournamentName = 'Euro Cup';
    filters = ['tournaments', 'trivia', 'history'];
    historyData: any;
    loading = false;
    error: string | undefined;
    userId: string | null = null;
    private destroy$: Subject<void> = new Subject();
    currentIndex: number = 0; 
    typingText: string='';
    typingSpeed : number = 100;

    constructor(
        private historyService: HistoryService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) {
        this.route.params.pipe(
            map(params => params['tournamentName']),
            takeUntil(this.destroy$)
        ).subscribe(tournamentName => {
            this.tournamentName = tournamentName;
            if (tournamentName) {
                this.fetchHistory(tournamentName);
            }
            this.typeText();
        });
    }
      
    fetchHistory(tournamentName: string) {
        this.loading = true;
        this.error = undefined;
    
        this.historyService.history(tournamentName)
            .pipe(
                catchError((error) => {
                    this.error = error;
                    return of(null); 
                }),
                finalize(() => {
                    this.loading = false;  
                })
            )
            .subscribe((history) => {
                if (history) {
                    this.historyData = history;  
                }
            });
    }

    typeText(): void {
        const text = 'became Champion, defeating'; 
        this.currentIndex = 0;
        setTimeout(() => {
          const typingInterval = setInterval(() => {
            if (this.currentIndex < text.length) {
              this.typingText += text[this.currentIndex];
              this.currentIndex++;
            } else {
              clearInterval(typingInterval);
            }
          }, this.typingSpeed);
        }, 500); //Initial pause
      }

    onFilterSelect(filter: string): void {

          if (filter === 'tournaments') {
            this.router.navigate(['tournaments']);
          } else if (filter === 'trivia') {
            this.router.navigate(['trivia', 'Euro Cup']);
          } else if (filter === 'history') {
            this.router.navigate(['history', 'Euro Cup']);
          } 
      }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }        

}

import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { TriviaService } from './services/triviaservices';
import { finalize, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnDestroy  {

    tournamentName = 'Euro Cup';
    filters = ['tournaments', 'trivia', 'history'];
    triviaItems: any;
    loading = false;
    error: string | undefined;
    userId: string | null = null;
    private destroy$: Subject<void> = new Subject();

  constructor(
    private triviaService: TriviaService,
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
                this.fetchTrivia(tournamentName);
            }
        });
     }

     fetchTrivia(tournamentName: string) {
        this.loading = true;
        this.error = undefined;
    
        this.triviaService.trivia(tournamentName)
            .pipe(
                catchError((error) => {
                    this.error = error;
                    return of(null); 
                }),
                finalize(() => {
                    this.loading = false;  
                })
            )
            .subscribe((trivia) => {
                if (trivia) {
                    this.triviaItems = trivia;  
                }
            });
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

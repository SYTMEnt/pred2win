import { Component, OnInit } from '@angular/core';
import { HallOfFameService } from './services/halloffame.service';
import { HallOfFame } from 'src/app/store/halloffame/types'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './halloffame.component.html',
  styleUrls: ['./halloffame.component.scss']
})
export class HallOfFameComponent implements OnInit {

  halloffameDetails: HallOfFame | null = null;
  loading = false;
  error: string | undefined;

  constructor(private halloffameService: HallOfFameService, private router: Router) {}

  ngOnInit(): void {
    this.fetchHallOfFame();
  }

  fetchHallOfFame(): void {
    this.loading = true;
    this.error = undefined;

    this.halloffameService.halloffame().subscribe(
      (data) => {
        this.halloffameDetails = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'An error occurred while fetching the Hall of Fame data';
        this.loading = false;
      }
    );
  }
}

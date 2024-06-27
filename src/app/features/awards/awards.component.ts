import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AwardsService } from './services/awards.service';


@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
    filters = ['awards', 'streaks'];
    selectedCategory: string = 'awards';
    tournamentId = 'focomeeuro24';
    pollType='tournament';
    awardDetails: any;
    loading = false;
    error: string | undefined;

    constructor(private awardsService: AwardsService,private router: Router) {}

    ngOnInit(): void {
      this.fetchAwards();
    }

    onFilterSelect(category: string) {
      this.selectedCategory = category;
      this.fetchAwards();
    }

  fetchAwards() {

    this.loading = true;
    this.error = undefined;

    if (this.selectedCategory !== undefined) {
      this.awardsService.awards(this.tournamentId, this.selectedCategory)
        .subscribe((awards) => {
          this.awardDetails = awards;
        },
        (error) => {
          this.error = error;
        },
        () => {
          this.loading = false;
        });
    } 

  }

}

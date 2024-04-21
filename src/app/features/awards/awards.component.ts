import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { map, take } from 'rxjs';
import { Awards } from 'src/app/store/awards/types';
import { AwardsService } from './services/awards.service';
import { AwardsMaterialModule } from './awards-material.module';


@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
    filters = ['awards', 'streaks', 'boosters'];
    selectedCategory: string = 'awards';
    tournamentId = 'focomeeuro24';
    awardDetails: any;
    loading = false;
    error: string | undefined;

    constructor(private awardsService: AwardsService) {}

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

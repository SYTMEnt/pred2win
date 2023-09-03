import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent {

    constructor(private route: ActivatedRoute) {
        this.route.paramMap.pipe(
          take(1)
        ).subscribe(console.log)
    }
}

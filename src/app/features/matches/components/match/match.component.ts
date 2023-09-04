import { Component, Input } from '@angular/core';
import { Match } from 'src/app/store/matches/types';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {
    @Input() match!: Match;
}

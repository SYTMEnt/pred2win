import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Match } from '../../../../store/matches/types';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {
    @Input() match!: Match;
    @Output() selected = new EventEmitter<Match>()
}

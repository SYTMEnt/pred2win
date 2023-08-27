import { Component, Input } from '@angular/core';
import { Tournament } from '../../../../store/tournaments/types';

@Component({
  selector: 'app-tournament-list-card',
  templateUrl: './tournament-list-card.component.html',
  styleUrls: ['./tournament-list-card.component.scss']
})
export class TournamentListCardComponent {

  @Input() data!: Tournament

}

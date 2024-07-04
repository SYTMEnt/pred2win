import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArchivedTour } from 'src/app/store/halloffame/types';

@Component({
  selector: 'app-archived-tournament',
  templateUrl: './archivedtour.component.html',
  styleUrls: ['./archivedtour.component.scss']
})
export class ArchivedTournamentComponent {
  @Input() tournament!: ArchivedTour;
}

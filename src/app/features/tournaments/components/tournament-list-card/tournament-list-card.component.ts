import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tournament-list-card',
  templateUrl: './tournament-list-card.component.html',
  styleUrls: ['./tournament-list-card.component.scss']
})
export class TournamentListCardComponent implements OnInit {

  data$!: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.data$ = this.http.get('assets/tournamentList.json')
  }

}

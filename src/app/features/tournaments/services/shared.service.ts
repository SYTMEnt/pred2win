import { Injectable } from '@angular/core';
import { AuthStoreService } from './../../../store/auth/auth-store.service';
import { TournamentStoreService } from './../../../store/tournaments/tournament-store.service';
import { Router } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { TournamentStatus } from './../services/tournaments.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private authStoreService: AuthStoreService,
    private tournamentStoreService: TournamentStoreService,
    private router: Router
  ) { }




}

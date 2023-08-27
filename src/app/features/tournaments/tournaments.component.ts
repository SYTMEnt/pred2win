import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TournamentStoreService } from 'src/app/store/tournaments/tournament-store.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

    constructor(private tournamentStoreService: TournamentStoreService) {}

    tournaments$ = this.tournamentStoreService.tournaments$;
    tournamenntActions$ = this.tournamentStoreService.tournamentsActions$.pipe(
        map((data) => data.processing)
    )

    ngOnInit() {
        this.tournamentStoreService.tournaments()
    }

    data = [
      {
          tournamentTeams: [],
          tournamentStreaks: [],
          tournamentBoosters: [],
          tournamentRooms: [],
          _id: "63babb727eebf1eeaf3dc165",
          eventType: "cricket",
          tournamentId: "crclmeipl2023",
          format: "T20",
          tournamentStatus: "scheduled",
          tournamentOrg: "BCCI",
          tournamentName: "Indian Premier League",
          tournamentShortName: "IPL2023",
          tournamentYear: "2023",
          tournamentLocation: [
              "India"
          ],
          tournamentColor: "#A52A30",
          tournamentLogo: "https://sytm-dev.s3.us-east-1.amazonaws.com/tournament/cricket/club/IPL2023.jpg",
          tournamentCategory: "men",
          numberOfTeams: 10,
          teamType: "club",
          tournamentPics: [],
          tournamentTrivia: [],
          tournamentHistory: [],
          tournamentAwards: [],
          createdAt: "2023-01-08T12:47:46.320Z",
          updatedAt: "2023-03-03T18:00:39.821Z",
          __v: 0,
          tournamentStartTime: "2023-12-06T00:00:00.000Z"
      },
      {
          _id: "63f949a71d6fc65eee7faf20",
          eventType: "football",
          tournamentId: "focomeeuro24",
          format: "",
          tournamentStatus: "scheduled",
          tournamentOrg: "UEFA",
          tournamentName: "Euro Cup",
          tournamentShortName: "EURO24",
          tournamentYear: "2024",
          tournamentLocation: [
              "Germany"
          ],
          tournamentColor: "#003300",
          tournamentLogo: "https://sytm-dev.s3.us-east-1.amazonaws.com/tournament/football/country/EURO24.png",
          tournamentCategory: "men",
          numberOfTeams: 24,
          teamType: "country",
          tournamentMinBalance: 900,
          tournamentMembers: 460,
          tournamentPics: [],
          createdAt: "2023-02-24T23:35:03.113Z",
          updatedAt: "2023-03-05T15:38:25.891Z",
          __v: 0,
          tournamentStartTime: "2024-06-14T00:00:00.000Z"
      },
      {
          _id: "63f11b453b02287c8dbf5e21",
          eventType: "football",
          tournamentId: "focomewc2026",
          format: "",
          tournamentStatus: "new",
          tournamentOrg: "FIFA",
          tournamentName: "World Cup",
          tournamentShortName: "WC2026",
          tournamentYear: "2026",
          tournamentStartTime: "2026-06-10T00:00:00.000Z",
          tournamentLocation: [
              "USA",
              "Canada",
              "Mexico"
          ],
          tournamentColor: "#A52A2A",
          tournamentLogo: "https://sytm-dev.s3.amazonaws.com/tournament/football/country/WC2026.png",
          tournamentCategory: "men",
          numberOfTeams: 32,
          teamType: "country",
          tournamentMinBalance: 900,
          tournamentMembers: 233,
          tournamentPics: [],
          totalMatches: 60,
          createdAt: "2023-02-18T18:39:01.493Z",
          updatedAt: "2023-03-04T22:54:50.098Z",
          __v: 0
      }
    ] as any[]
}

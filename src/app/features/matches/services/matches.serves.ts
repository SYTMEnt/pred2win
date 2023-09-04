import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Matches } from "src/app/store/matches/types";

@Injectable({
    providedIn: 'root'
})
export class MatchesService {

    constructor(private http: HttpClient) {}

    matches(tournamentId: string): Observable<Matches>{
        return this.http.get<Matches>(`/gui/tournament/${tournamentId}/schedule`).pipe(
            map(matches => matches.map((match) => {
                delete match.polls;
                return match;
            }))
        )
    }
}
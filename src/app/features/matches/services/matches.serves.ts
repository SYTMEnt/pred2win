import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Matches } from "../../../store/matches/types";

@Injectable({
    providedIn: 'root'
})
export class MatchesService {

    constructor(private http: HttpClient) {}

    matches(tournamentId: string, matchStatus?: string): Observable<Matches>{
        let params;
        if(matchStatus) {
            params = {
                matchStatus
            }
        }
        return this.http.get<Matches>(`/gui/tournament/${tournamentId}/schedule`, {params}).pipe(
            map(matches => matches.map((match) => {
                delete match.polls;
                return match;
            }))
        )
    }
}
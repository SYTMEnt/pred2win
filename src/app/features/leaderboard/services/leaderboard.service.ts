import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Leaderboard } from "../../../store/leaderboard/types";

@Injectable({
    providedIn: 'root'
})
export class LeaderboardService {
    
    constructor(private http: HttpClient) {}

    leaderboard(tournamentId: string): Observable<Leaderboard>{
        let params = new HttpParams()
            .set('tournamentId', tournamentId);
        
        return this.http.get<Leaderboard>(`/gui/leaderboard`, {params});
    }
}
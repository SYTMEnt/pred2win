import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TournamentList } from "../../../store/tournaments/types";

// hardcode for testing
const USER_ID = "glo1889407"

@Injectable({
    providedIn: "root"
})
export class TournamentService {

    constructor(private http: HttpClient) {}

    tournaments(): Observable<TournamentList> {
        return this.http.get<TournamentList>('/gui/tournament/tournamentList', {
            params: {
                userId: USER_ID
            }
        });
    }
}
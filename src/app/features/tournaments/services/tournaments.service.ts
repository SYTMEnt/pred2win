import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TournamentList } from "../../../store/tournaments/types";

// hardcode for testing
const USER_ID = "glo1889407"

export enum TournamentStatus {
    NEW = "new",
    SCHEDULED = "scheduled",
    ONGOING = "ongoing",
    ARCHIVED = "archived"
}
export interface TournamentParams {
    userId?: string,
    tournamentStatus?: TournamentStatus
}

@Injectable({
    providedIn: "root"
})
export class TournamentService {

    constructor(private http: HttpClient) {}

    tournaments(parameters: TournamentParams): Observable<TournamentList> {
        if(!parameters.userId) {
            delete parameters.userId
        }
        if(!parameters.tournamentStatus) {
            delete parameters.tournamentStatus
        }
        return this.http.get<TournamentList>('/gui/tournament/tournamentList', {
            params: {...parameters}
        });
    }
}
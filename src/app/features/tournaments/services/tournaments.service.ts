import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TournamentDetails, TournamentList } from "../../../store/tournaments/types";

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

// TODO - Should not require userId or displaName
export interface TournamentJoinParams {
    userId: string,
    displayName: string,
    tournamentId: string,
    league: string
}

@Injectable({
    providedIn: "root"
})
export class TournamentService {

    constructor(private http: HttpClient) {}

    // TODO - Api should not require userId, it should be decoded from JWT
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

    // TODO - Api should return some success or error message.
    // TODO - Api should not require userId or display name for joining, should be decoded from JWT
    join(params: TournamentJoinParams): Observable<any> {
        return this.http.post<any>("/user/tournamentRegister", params)
    }

    getTournamentDetails(tournamentId: string): Observable<TournamentDetails> {
        return this.http.get<TournamentDetails>(`/gui/tournament/tournamentDetails?tournamentId=${tournamentId}`);
    }
}
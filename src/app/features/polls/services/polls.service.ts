import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { PollList } from "../../../store/polls/types";

@Injectable({
    providedIn: 'root'
})
export class PollsService {

    constructor(private http: HttpClient) {}

    polls(matchId: string, pollType?: string): Observable<PollList>{
        let params = new HttpParams().set('matchId', matchId);
        if(pollType) {
            params = params.set('pollType', pollType)
        }
        return this.http.get<PollList>(`/gui/polls`, {params});
    }
}
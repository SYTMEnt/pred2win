import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { PollList, Poll } from "../../../store/polls/types";

export interface PollSubmitParams {
    predictionType: "submit" | "retract",
    pollId: string,
    userId: string,
    pollOption: string,
    valueString: string
}

@Injectable({
    providedIn: 'root'
})
export class PollsService {

    constructor(private http: HttpClient) {}

    polls(matchId: string, userId: string, pollType?: string): Observable<PollList>{
        let params = new HttpParams().set('matchId', matchId).set('userId', userId);
        if(pollType) {
            params = params.set('pollType', pollType)
        }
        return this.http.get<PollList>(`/gui/polls`, {params});
    }

    poll(pollId: string, userId: string): Observable<Poll> {
        const params = new HttpParams()
            .set('pollId', pollId)
            .set('userId', userId)
        return this.http.get<Poll>('/gui/pollDetails', {params});
    }

    submitPoll(params: PollSubmitParams) {
        return this.http.post('/user/prediction', params);
    }
}
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Predictions } from "src/app/store/predictions/types";

@Injectable({
    providedIn: 'root'
})
export class PredictionService {
    
    constructor(private http: HttpClient) {}

    predictiontransactions(userId: string, matchId?: string): Observable<Predictions> {
        let url = `/gui/user/${userId}/predictionTransactions`;
        let params = new HttpParams();
        
        if (matchId) {
            params = params.set('tournamentId', matchId);
        }
        
        return this.http.get<Predictions>(url, { params });
    }
}

import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transactions } from "src/app/store/transactions/types";

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    
    constructor(private http: HttpClient) {}

    cointransactions(userId: string, matchId?: string): Observable<Transactions> {
        let url = `/gui/user/${userId}/coinTransactions`;
        let params = new HttpParams();
        
        if (matchId) {
            params = params.set('tournamentId', matchId);
        }
        
        return this.http.get<Transactions>(url, { params });
    }
}

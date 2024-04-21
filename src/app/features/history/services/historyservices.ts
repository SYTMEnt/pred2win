import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { History } from "src/app/store/history/types";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    
    constructor(private http: HttpClient) {}

    history(tournamentName?: string): Observable<History> {
        let url = `/gui/tournamentHistory`;
        let params = new HttpParams();
        
        if (tournamentName) {
            params = params.set('tournamentName', tournamentName);
        }
        
        return this.http.get<History>(url, { params });
    }
}

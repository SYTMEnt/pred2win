import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Userstats } from "src/app/store/userstats/types";

@Injectable({
    providedIn: 'root'
})
export class UserstatService {
    
    constructor(private http: HttpClient) {}

    userstats(userId: string, tournamentId?: string): Observable<Userstats> {
        let url = `/gui/user/${userId}/predictionStats`;
        let params = new HttpParams();
        
        if (tournamentId) {
            params = params.set('tournamentId', tournamentId);
        }
        
        return this.http.get<Userstats>(url, { params });
    }
}

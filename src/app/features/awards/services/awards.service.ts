import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Awards } from "src/app/store/awards/types";

@Injectable({
    providedIn: 'root'
})
export class AwardsService {
    
    constructor(private http: HttpClient) {}

    awards(tournamentId: string, category: string): Observable<Awards>{
        let params = new HttpParams()
            .set('tournamentId', tournamentId)
            .set('category', category);
        
        return this.http.get<Awards>(`/gui/tournamentAwards`, {params});
    }
}
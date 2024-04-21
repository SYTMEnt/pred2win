import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Trivia } from "src/app/store/trivia/types";

@Injectable({
    providedIn: 'root'
})
export class TriviaService {
    
    constructor(private http: HttpClient) {}

    trivia(tournamentName?: string): Observable<Trivia> {
        let url = `/gui/tournamentTrivia`;
        let params = new HttpParams();
        
        if (tournamentName) {
            params = params.set('tournamentName', tournamentName);
        }
        
        return this.http.get<Trivia>(url, { params });
    }
}

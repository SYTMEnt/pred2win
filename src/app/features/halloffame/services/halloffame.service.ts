import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HallOfFame } from "./../../../store/halloffame/types"

@Injectable({
    providedIn: 'root'
})
export class HallOfFameService {
    
    constructor(private http: HttpClient) {}

    halloffame(): Observable<HallOfFame>{
        let params = new HttpParams()
        
        return this.http.get<HallOfFame>(`/gui/halloffame`);
    }
}
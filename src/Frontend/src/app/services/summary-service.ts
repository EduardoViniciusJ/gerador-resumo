import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Summary } from "../interfaces/summary-interface";
import { Observable } from "rxjs";

export class SummaryService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.API_URL}`;   

    genereteSummary(text: string): Observable<Summary> {
        return this.http.post<Summary>(`${this.apiUrl}/resumo`, { text });
    }
}
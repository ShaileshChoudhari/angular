import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class EventService {
    private _eventsUrl = "http://localhost:3000/api/events";
    private _specialEventsUrl = "http://localhost:3000/api/events";

    constructor(private http: HttpClient) { }

    getEvents(): Observable<any> {
        return this.http.get<any>(this._eventsUrl);
    }

    getSpecialEvents(): Observable<any> {
        return this.http.get<any>(this._specialEventsUrl);
    }
}

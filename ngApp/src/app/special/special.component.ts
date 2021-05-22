import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { EventService } from '../event.service';

@Component({
selector: 'app-special',
    templateUrl: './special.component.html',
    styleUrls: ['./special.component.css']
})

export class SpecialComponent implements OnInit {
    public specialEvents = [];

    constructor(private _eventService: EventService,
        private _router: Router) { }

    ngOnInit() {
        this._eventService.getEvents()
            .subscribe(
                res => this.specialEvents = res,
                err => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            this._router.navigate(['/login']);
                        }
                    }
                }
            );
    }
}

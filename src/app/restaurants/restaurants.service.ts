import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class RestaurantsService {

    rests: Restaurant[];
    constructor(private http: Http) {

    }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }
// tslint:disable-next-line:eofline
}
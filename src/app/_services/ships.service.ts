import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class ShipsService {

    // public shipList: Ships[] = [];
    private serviceURL = 'https://swapi.dev/api/starships';
    private nextPage = 2;

    constructor( private http: HttpClient) { }
    

    getShips(): Observable<any> {
        const url = `${this.serviceURL}/?page=${this.nextPage}`;
        this.nextPage++;
        return this.http.get<any>(url);
      }
}
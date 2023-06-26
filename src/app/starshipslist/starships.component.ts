import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipsService } from '../_services/ships.service';

@Component({ templateUrl: 'starships.component.html' })

export class StarShipsComponent implements OnInit {

    ships: any[] = [];

    constructor( 
        private http: HttpClient,
        private router: Router,
        private shipService: ShipsService
    ) {}

    ngOnInit() {
        this.http
          .get('https://swapi.dev/api/starships')
          .subscribe((response: any) => {
            this.ships = response.results.map((ship: any, index: number) => ({
              ...ship,
              id: index + 1,
            }));
          });
        this.loadShips();
      }

    loadShips() {
        this.shipService.getShips().subscribe(
          (response) => {
            this.ships = this.ships.concat(response.results);
          },
          (error) => {
            console.error('Error al carregar les naus:', error);
          }
        );
      }

      seeCardShip(ship: any) {
        this.router.navigate(['/cardship'], { state: { starship: ship } });
      }


 }
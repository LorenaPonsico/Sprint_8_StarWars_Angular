import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipsService } from '../_services/ships.service';

@Component({
  selector: 'app-listships',
  templateUrl: 'listships.component.html',
  styleUrls: ['listships.component.css']
})
export class ListShipsComponent implements OnInit {

  ships: any[] = [];
  hasLoaded: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private shipService: ShipsService
  ) { }

  ngOnInit() {
    this.http.get('https://swapi.dev/api/starships').subscribe((response: any) => {
      this.ships = response.results.map((ship: any, index: number) => ({
        ...ship,
        id: index + 1
      }));
      this.hasLoaded = true; // Marcar como cargado
    });
  }

  loadShips() {
    this.shipService.getStarShips().subscribe(
      (response) => {
        this.ships = this.ships.concat(response.results);
      },
      (error) => {
        console.error('No hay mas naves que mostrar', error);
      }
    );
  }


  seeCardShip(ship: any, i: any) {
    let shipId: any = i + 1;
    this.router.navigate([`listships/cardship/${shipId}`], { state: { starship: ship } });
  }
}

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
    this.loadShips();
  }

  loadShips() {
    this.shipService.getStarShips().subscribe(
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

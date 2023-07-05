import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ShipsService {

  private serviceURL = 'https://swapi.dev/api/starships';
  private imageURL = 'https://starwars-visualguide.com/assets/img/starships/'
  private nextPage = 2;
  private imagesPilots = 'https://starwars-visualguide.com/assets/img/characters/'
  private filmsUrl = 'https://starwars-visualguide.com/assets/img/films/'

  constructor(private http: HttpClient) { }


  getStarShips(): Observable<any> { // llamada a la API.  construye la URL de la solicitud GET para obtener las naves espaciales de una página específica
    const url = `${this.serviceURL}/?page=${this.nextPage}`;
    this.nextPage++;
    return this.http.get<any>(url);
  }

  getImagesShips(starshipId: string): string {
    return `${this.imageURL}${starshipId}.jpg`;
  }

  getImagesPilots(pilotsId: string): any {
    return `${this.imagesPilots}${pilotsId}.jpg`;
  }

  getImagesFilms(filmId: string): any {
    return `${this.filmsUrl}${filmId}.jpg`;
  }
}



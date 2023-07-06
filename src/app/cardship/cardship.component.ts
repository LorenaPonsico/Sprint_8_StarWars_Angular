import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipsService } from '@app/_services/ships.service';

@Component({
  selector: 'app-cardship',
  templateUrl: './cardship.component.html',
  styleUrls: ['./cardship.component.css']
})

export class CardshipComponent implements OnInit {

  public starship: any;
  public imagesURL: string = "";
  public imageError: boolean = false;
  public errorImageUrl: string = 'assets/placeholder.jpg'
  public imagesPilots: any[] = [];
  public films: any[] = [];


  constructor(private shipsService: ShipsService, private router: Router) { }

  ngOnInit(): void {
    this.starship = history.state.starship;
    const starshipId = this.starship.url.split('/').filter(Boolean).pop();
    this.imagesURL = this.shipsService.getImagesShips(starshipId);
    this.getPilotsDetails();
    this.getFilmDetails();
  }

  onImageError() {
    this.imageError = true;
  }

  getPilotsDetails() {
    this.imagesPilots = this.starship.pilots.map((pilotUrl: string) => {
      const pilotId = pilotUrl.split('/').filter(Boolean).pop();
      return this.shipsService.getImagesPilots(pilotId!);
    }
    );
  }

  getFilmDetails() {
    this.films = this.starship.films.map(
      (filmUrl: string) => {
        const filmId = filmUrl.split('/').filter(Boolean).pop();
        return this.shipsService.getImagesFilms(filmId!)
      }
    );
  }

}
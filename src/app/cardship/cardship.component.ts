import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipsService } from '@app/_services/ships.service';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'app-cardship',
  templateUrl: './cardship.component.html',
  styleUrls: ['./cardship.component.css']
})
export class CardshipComponent implements OnInit {

  starship: any;
  imagesURL: string = "";
  imageError: boolean = false;
  errorImageUrl: string = 'assets/placeholder.jpg'
  imagesPilots: any[] = [];
  films: any[] = [];


  constructor(private route: ActivatedRoute, private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.starship = history.state.starship;
    const starshipId = this.starship.url.split('/').filter(Boolean).pop();
    this.imagesURL = this.shipsService.getImages(starshipId);
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
        return this.shipsService.getFilmsXShip(filmId!)
      }

    );
  }

}
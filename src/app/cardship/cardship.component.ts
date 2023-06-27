import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipsService } from '@app/_services/ships.service';

@Component({
  selector: 'app-cardship',
  templateUrl: './cardship.component.html',
  styleUrls: ['./cardship.component.css']
})
export class CardshipComponent implements OnInit {

  starship: any;
  imagesURL: string = ""


  constructor(private route: ActivatedRoute, private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.starship = history.state.starship;
    const starshipId = this.starship.url.split('/').filter(Boolean).pop();
    this.imagesURL = this.shipsService.getImages(starshipId);
    console.log(this.imagesURL)

  }

}

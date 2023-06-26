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

  constructor( private route: ActivatedRoute){}

  ngOnInit(): void {
    this.starship = history.state.starship;
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {
  
  
  @Input()  imagesPilots: any[] = [];

  ngOnInit(){
    this.imagesPilots
  }

 
}

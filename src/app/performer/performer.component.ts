import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performer',
  templateUrl: './performer.component.html',
  styleUrls: ['./performer.component.css']
})
export class PerformerComponent implements OnInit {

  performer: any;

  constructor() { }

  ngOnInit() {
  }

  performerChanged(performer: any){
    this.performer = performer;
  }

}

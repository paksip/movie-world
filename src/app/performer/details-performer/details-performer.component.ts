import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-performer',
  templateUrl: './details-performer.component.html',
  styleUrls: ['./details-performer.component.css']
})
export class DetailsPerformerComponent implements OnInit {

  @Input('performer') performer: any;

  constructor() { }

  ngOnInit() {
  }

}

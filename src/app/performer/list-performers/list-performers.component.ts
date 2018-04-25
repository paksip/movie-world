import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PerformerService} from "../performer.service";

@Component({
  selector: 'app-list-performers',
  templateUrl: './list-performers.component.html',
  styleUrls: ['./list-performers.component.css']
})
export class ListPerformersComponent implements OnInit {

  @Output('performer') performer = new EventEmitter<any>();
  performerId: any;

  constructor(private performerService: PerformerService) { }

  ngOnInit() {
  }

  getById(){
    this.performerService.getById(this.performerId).subscribe(result => {
      this.performer.emit(result);
    });
  }

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PerformerService} from "../performer.service";
import {SearchOption} from "../../shared/enums/search-option.enum";
import {Router} from "@angular/router";
import {MovieService} from "../../movie/movie.service";

@Component({
  selector: 'app-list-performers',
  templateUrl: './list-performers.component.html',
  styleUrls: ['./list-performers.component.css']
})
export class ListPerformersComponent implements OnInit {

  search: string;
  performers: any[] = [];

  @Output('performer') performer= new EventEmitter<any>();

  constructor(private performerService: PerformerService, private router: Router) { }

  ngOnInit() {
  }

  getByText() {
    this.performerService.getByText(this.search).subscribe((outcome) => {
      this.performer.emit(undefined);
      this.performers = outcome.results;
    });
  }

  details(performer: any) {
    this.performers = [];
    this.performer.emit(performer);
  }
}

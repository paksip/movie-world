import {Component, OnInit} from '@angular/core';
import {PerformerService} from "../performer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-performers',
  templateUrl: './list-performers.component.html',
  styleUrls: ['./list-performers.component.css']
})
export class ListPerformersComponent implements OnInit {

  search: string;
  performers: any[] = [];

  constructor(private performerService: PerformerService, private router: Router) { }

  ngOnInit() {
  }

  // Get a person by text
  getByText() {
    this.performerService.getByText(this.search).subscribe((outcome) => {
      this.router.navigate(['/performer'], { queryParams: {} }); // Clear URL
      this.performers = outcome.results;
    });
  }

  // Click on a person
  details(performer: any) {
    this.performers = [];
    this.router.navigate(['/performer'], { queryParams: { performerId: performer.id} });
  }
}

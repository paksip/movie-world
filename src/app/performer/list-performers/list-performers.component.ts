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
  isLoading = false;

  constructor(private performerService: PerformerService, private router: Router) { }

  ngOnInit() {
  }

  // Get a person by text
  getByText() {
    this.isLoading = true;
    this.performerService.getByText(this.search).subscribe((outcome) => {
      this.isLoading = false;
      this.router.navigate(['/performer'], { queryParams: {} }); // Clear URL
      this.performers = outcome.results;
    }, error => {
      confirm('Wrong input -> no results.');
    });
  }

  // Click on a person
  details(performer: any) {
    this.performers = [];
    this.router.navigate(['/performer'], { queryParams: { performerId: performer.id} });
  }
}

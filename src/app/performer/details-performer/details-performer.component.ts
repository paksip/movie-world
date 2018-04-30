import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PerformerService} from "../performer.service";

@Component({
  selector: 'app-details-performer',
  templateUrl: './details-performer.component.html',
  styleUrls: ['./details-performer.component.css']
})
export class DetailsPerformerComponent implements OnInit {

  @Input('performer') performer: any;
  performerId: number;
  credits: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private performerService: PerformerService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if(queryParams.performerId){
        this.performerId = queryParams.performerId;
        this.performerService.getById(this.performerId).subscribe(result => {
          this.performer = result;
        });
        this.performerService.getCombinedCredits(this.performerId).subscribe(credits =>{
          this.credits = credits.cast;
        });
      }else {
        this.performer = undefined;
      }

    });
  }

}

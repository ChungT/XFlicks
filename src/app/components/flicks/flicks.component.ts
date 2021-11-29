import { Component, OnInit } from '@angular/core';
import { FlickService } from '../../services/flick.service';
import { Flick } from '../../Flick';

@Component({
  selector: 'app-flicks',
  templateUrl: './flicks.component.html',
  styleUrls: ['./flicks.component.css']
})
export class FlicksComponent implements OnInit {
  flicks: Flick[] = [];

  constructor(private flickService: FlickService) {}

  ngOnInit(): void {
    this.flickService.getFlicks().subscribe((flicks) => (this.flicks = flicks));
  }
}

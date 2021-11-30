import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlickService } from '../services/flick.service';
import { Flick } from '../Flick';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  flicks: Flick[] = [];
  @Input() flick!: Flick;
  movie: any;
  constructor(
    private route: ActivatedRoute, 
    private flickService: FlickService,
    private _router: Router
    ) {}

  ngOnInit(): void {
    this.movieDetail();
  }

  movieDetail(){
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.flickService.getFlickDetail(movieId).subscribe(
      data => this.movie = data
    )
    this.flickService.getFlicks().subscribe((flicks) => (this.flicks = flicks));
  }

}

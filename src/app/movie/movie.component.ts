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
  /*movie: Flick[] = [];

  constructor(private _router: Router, private flickService: FlickService) {
    //this.movie = this._router.getCurrentNavigation()?.extras.state;
    //console.log(this.movie);
  }

  ngOnInit(): void {
    //this.flickService.getFlicks().subscribe((flicks) => (this.flicks = flicks));
    //console.log(this.flick);
    this.flickService.getFlickDetail(1);
    this.flickService.getFlickDetail(1).subscribe((movie) => (this.movie = movie));
  }*/

  flicks: Flick[] = [];
  movie: any;
  error: any;

  constructor(
    private route: ActivatedRoute, 
    private flickService: FlickService
    ) {}

  ngOnInit(): void {
    this.movieDetail()
  }

  movieDetail(){
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.flickService.getFlickDetail(movieId).subscribe(
      data => this.movie = data
    )
  }
}

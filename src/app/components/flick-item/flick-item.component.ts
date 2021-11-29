import { Component, OnInit, Input } from '@angular/core';
import { Flick } from '../../Flick';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flick-item',
  templateUrl: './flick-item.component.html',
  styleUrls: ['./flick-item.component.css']
})
export class FlickItemComponent implements OnInit {
  @Input() flick!: Flick;
  faTimes = faTimes;

  constructor(private _router: Router) { }

  ngOnInit(): void {}

  onClick(flickID: number){
    this._router.navigate(['/movie', flickID], {
      state: {
        id: this.flick.id
      }
    });
  }

}

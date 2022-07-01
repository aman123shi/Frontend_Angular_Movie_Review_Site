import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  constructor() {}
  slideCounter: number = 0;
  ngOnInit(): void {
    setInterval(() => {
      this.slideCounter =
        this.slideCounter > this.items.length - 1 ? 0 : ++this.slideCounter;
    }, 5000);
  }
}

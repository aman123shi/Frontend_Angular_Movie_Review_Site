import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genre';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'movie-genres',
  templateUrl: './movie-genres.component.html',
  styleUrls: ['./movie-genres.component.scss'],
})
export class MovieGenresComponent implements OnInit {
  genres: Genre[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMoviesGenres()
      .subscribe((genres) => (this.genres = genres));
  }
}

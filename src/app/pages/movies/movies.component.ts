import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getPagedMovies(1);
  }
  getPagedMovies(page: number = 1) {
    this.movieService
      .searchMovies(page)
      .subscribe((movies) => (this.movies = movies));
  }
  paginate(event: any) {
    //TODO: when internet is active
  }
}

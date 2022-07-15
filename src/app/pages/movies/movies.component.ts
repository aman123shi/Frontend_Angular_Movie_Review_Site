import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  isGenreSelected: boolean = false;
  genreId: string = '';
  searchValue: string | null = null;
  isSearching: boolean = false;
  constructor(
    private spinner: NgxSpinnerService,
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.isGenreSelected = true;
        this.genreId = genreId;
        this.getMoviesByGenreId(genreId);
      } else {
        this.getPagedMovies(1);
      }
    });
  }
  getPagedMovies(page: number = 1, searchKey?: string) {
    if (searchKey) {
      this.spinner.show();
      this.movieService.searchMovies(page, searchKey).subscribe((movies) => {
        this.spinner.hide();
        this.movies = movies;
      });
    } else {
      this.spinner.show();
      this.movieService.searchMovies(page).subscribe((movies) => {
        this.spinner.hide();
        this.movies = movies;
      });
    }
  }
  getMoviesByGenreId(genreId: string, page: number = 1) {
    this.movieService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }
  paginate(event: any) {
    let page = event.page + 1;
    if (this.isGenreSelected) this.getMoviesByGenreId(this.genreId, page);
    else if (this.searchValue) {
      this.getPagedMovies(page, this.searchValue);
    } else {
      this.getPagedMovies(page);
    }
  }
  searchValueChanged() {
    if (this.searchValue) {
      this.getPagedMovies(1, this.searchValue);
    }
  }
}

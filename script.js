'use strict'

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
      filmRating = +prompt("На сколько оцените его?", ""),
      lastFilmTwo = prompt("Один из последних просмотренных фильмов?", ""),
      filmRatingTwo = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm] = filmRating;
personalMovieDB.movies[lastFilmTwo] = filmRatingTwo;

console.log(personalMovieDB);



'use strict'

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
          filmRating = +prompt("На сколько оцените его?", "");

    if (lastFilm != null && filmRating != null && lastFilm !='' && filmRating !='' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = filmRating;
        console.log('good');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log();(personalMovieDB);
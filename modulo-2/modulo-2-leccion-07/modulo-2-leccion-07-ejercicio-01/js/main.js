"use strict";

const workWithMovies = () => {
  const movies = ["El Gran Gatsby", "Interstellar", "Troya"];
  movies[3] = "El diario de Noa";
  movies[1] = "7 Almas";

  console.log(movies);
};

workWithMovies();

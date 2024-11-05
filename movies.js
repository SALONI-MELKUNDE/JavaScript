//all the movies in 2018 with rating > 4
//sort them by their rating
//Descending order
//Pick their title

const movies = [
    { title: "Movie A", year: 2018, rating: 4.5 },
    { title: "Movie B", year: 2018, rating: 4.7 },
    { title: "Movie C", year: 2017, rating: 3.5 },
    { title: "Movie D", year: 2018, rating: 4.0 }
];


const titles = movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title)

console.log(titles);
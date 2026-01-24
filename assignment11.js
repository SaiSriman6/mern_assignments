/*Movie Streaming Platform

You are working on a movie recommendation system.
Test data:
movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//filter() only "Sci-Fi" movies
let res41=movies.filter(x=>x.genre=="Sci-Fi");
console.log(res41);

// map() to return:"Inception (8.8)"
let res42=movies.map((x)=>{ 
    return `${x.title} (${x.rating})`

});
console.log(res42);

//reduce() to find average movie rating
let res43=movies.reduce((acc,x)=>acc+x.rating,0)/movies.length;
consolelog(res43.toFixed(2));

//find() movie "Joker"
let res44=movies.find(x=>x.title=='Joker');
console.log(res44);

//findIndex() of "Avengers"
let res45=movies.findIndex(x=>x.title=='Avengers');
console.log(res45);

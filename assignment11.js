/*Movie Streaming Platform

You are working on a movie recommendation system.
Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
    */
 
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

let q1=movies.filter(x=>x.genre=="Sci-Fi");
console.log(q1);

let q2=movies.map((x)=>{ 
    return `${x.title} (${x.rating})`

});
console.log(q2);

let q3=movies.reduce((acc,x)=>acc+x.rating,0)/movies.length;
console.log(q3.toFixed(2));

let q4=movies.find(x=>x.title=='Joker');
console.log(q4);

let q5=movies.findIndex(x=>x.title=='Avengers');
console.log(q5);
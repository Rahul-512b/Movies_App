// server.js
// Simple REST API serving Top Movies data

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Static movie data (you can extend this to 250)
const movies = [
{ id: 1, rank: 1, title: "The Shawshank Redemption", year: 1994, duration: "142 min", genre: ["Drama"], director: "Frank Darabont", writerName: "Stephen King, Frank Darabont", cast: ["Tim Robbins", "Morgan Freeman"], rating: 9.3, imdb_votes: 2800000, certification: "R" },
{ id: 2, rank: 2, title: "The Godfather", year: 1972, duration: "175 min", genre: ["Crime", "Drama"], director: "Francis Ford Coppola", writerName: "Mario Puzo, Francis Ford Coppola", cast: ["Marlon Brando", "Al Pacino"], rating: 9.2, imdb_votes: 1950000, certification: "R" },
{ id: 3, rank: 3, title: "The Dark Knight", year: 2008, duration: "152 min", genre: ["Action", "Crime", "Drama"], director: "Christopher Nolan", writerName: "Jonathan Nolan, Christopher Nolan", cast: ["Christian Bale", "Heath Ledger"], rating: 9.0, imdb_votes: 2900000, certification: "PG-13" },
{ id: 4, rank: 4, title: "12 Angry Men", year: 1957, duration: "96 min", genre: ["Drama"], director: "Sidney Lumet", writerName: "Reginald Rose", cast: ["Henry Fonda", "Lee J. Cobb"], rating: 9.0, imdb_votes: 850000, certification: "Approved" },
{ id: 5, rank: 5, title: "Schindler's List", year: 1993, duration: "195 min", genre: ["Biography", "Drama", "History"], director: "Steven Spielberg", writerName: "Thomas Keneally, Steven Zaillian", cast: ["Liam Neeson", "Ralph Fiennes"], rating: 9.0, imdb_votes: 1400000, certification: "R" },
{ id: 6, rank: 6, title: "The Lord of the Rings: The Return of the King", year: 2003, duration: "201 min", genre: ["Adventure", "Drama", "Fantasy"], director: "Peter Jackson", writerName: "J.R.R. Tolkien, Fran Walsh", cast: ["Elijah Wood", "Viggo Mortensen"], rating: 9.0, imdb_votes: 2000000, certification: "PG-13" },
{ id: 7, rank: 7, title: "Pulp Fiction", year: 1994, duration: "154 min", genre: ["Crime", "Drama"], director: "Quentin Tarantino", writerName: "Quentin Tarantino, Roger Avary", cast: ["John Travolta", "Samuel L. Jackson"], rating: 8.9, imdb_votes: 2200000, certification: "R" },
{ id: 8, rank: 8, title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, duration: "178 min", genre: ["Adventure", "Drama", "Fantasy"], director: "Peter Jackson", writerName: "J.R.R. Tolkien, Fran Walsh", cast: ["Elijah Wood", "Ian McKellen"], rating: 8.8, imdb_votes: 1900000, certification: "PG-13" },
{ id: 9, rank: 9, title: "The Good, the Bad and the Ugly", year: 1966, duration: "178 min", genre: ["Western"], director: "Sergio Leone", writerName: "Luciano Vincenzoni", cast: ["Clint Eastwood", "Eli Wallach"], rating: 8.8, imdb_votes: 800000, certification: "R" },
{ id: 10, rank: 10, title: "Fight Club", year: 1999, duration: "139 min", genre: ["Drama"], director: "David Fincher", writerName: "Chuck Palahniuk, Jim Uhls", cast: ["Brad Pitt", "Edward Norton"], rating: 8.8, imdb_votes: 2300000, certification: "R" },
{ id: 11, rank: 11, title: "Forrest Gump", year: 1994, duration: "142 min", genre: ["Drama", "Romance"], director: "Robert Zemeckis", writerName: "Winston Groom, Eric Roth", cast: ["Tom Hanks", "Robin Wright"], rating: 8.8, imdb_votes: 2100000, certification: "PG-13" },
{ id: 12, rank: 12, title: "Inception", year: 2010, duration: "148 min", genre: ["Action", "Sci-Fi"], director: "Christopher Nolan", writerName: "Christopher Nolan", cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"], rating: 8.8, imdb_votes: 2600000, certification: "PG-13" },
{ id: 13, rank: 13, title: "The Lord of the Rings: The Two Towers", year: 2002, duration: "179 min", genre: ["Adventure", "Drama", "Fantasy"], director: "Peter Jackson", writerName: "J.R.R. Tolkien, Fran Walsh", cast: ["Elijah Wood", "Viggo Mortensen"], rating: 8.8, imdb_votes: 1800000, certification: "PG-13" },
{ id: 14, rank: 14, title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980, duration: "124 min", genre: ["Action", "Adventure", "Sci-Fi"], director: "Irvin Kershner", writerName: "Leigh Brackett, Lawrence Kasdan", cast: ["Mark Hamill", "Harrison Ford"], rating: 8.7, imdb_votes: 1300000, certification: "PG" },
{ id: 15, rank: 15, title: "The Matrix", year: 1999, duration: "136 min", genre: ["Action", "Sci-Fi"], director: "The Wachowskis", writerName: "The Wachowskis", cast: ["Keanu Reeves", "Laurence Fishburne"], rating: 8.7, imdb_votes: 2100000, certification: "R" },
{ id: 16, rank: 16, title: "Goodfellas", year: 1990, duration: "146 min", genre: ["Biography", "Crime"], director: "Martin Scorsese", writerName: "Nicholas Pileggi, Martin Scorsese", cast: ["Robert De Niro", "Ray Liotta"], rating: 8.7, imdb_votes: 1200000, certification: "R" },
{ id: 17, rank: 17, title: "One Flew Over the Cuckoo's Nest", year: 1975, duration: "133 min", genre: ["Drama"], director: "Milos Forman", writerName: "Ken Kesey, Lawrence Hauben", cast: ["Jack Nicholson", "Louise Fletcher"], rating: 8.7, imdb_votes: 1000000, certification: "R" },
{ id: 18, rank: 18, title: "Se7en", year: 1995, duration: "127 min", genre: ["Crime", "Drama", "Mystery"], director: "David Fincher", writerName: "Andrew Kevin Walker", cast: ["Brad Pitt", "Morgan Freeman"], rating: 8.6, imdb_votes: 1900000, certification: "R" },
{ id: 19, rank: 19, title: "Seven Samurai", year: 1954, duration: "207 min", genre: ["Action", "Drama"], director: "Akira Kurosawa", writerName: "Akira Kurosawa", cast: ["Toshiro Mifune"], rating: 8.6, imdb_votes: 350000, certification: "Not Rated" },
{ id: 20, rank: 20, title: "It's a Wonderful Life", year: 1946, duration: "130 min", genre: ["Drama", "Family"], director: "Frank Capra", writerName: "Philip Van Doren Stern", cast: ["James Stewart", "Donna Reed"], rating: 8.6, imdb_votes: 500000, certification: "PG" },
{ id: 21, rank: 21, title: "The Silence of the Lambs", year: 1991, duration: "118 min", genre: ["Crime", "Drama"], director: "Jonathan Demme", writerName: "Thomas Harris, Ted Tally", cast: ["Jodie Foster", "Anthony Hopkins"], rating: 8.6, imdb_votes: 1500000, certification: "R" },
{ id: 22, rank: 22, title: "City of God", year: 2002, duration: "130 min", genre: ["Crime", "Drama"], director: "Fernando Meirelles", writerName: "Paulo Lins", cast: ["Alexandre Rodrigues"], rating: 8.6, imdb_votes: 800000, certification: "R" },
{ id: 23, rank: 23, title: "Saving Private Ryan", year: 1998, duration: "169 min", genre: ["Drama", "War"], director: "Steven Spielberg", writerName: "Robert Rodat", cast: ["Tom Hanks", "Matt Damon"], rating: 8.6, imdb_votes: 1400000, certification: "R" },
{ id: 24, rank: 24, title: "Life Is Beautiful", year: 1997, duration: "116 min", genre: ["Comedy", "Drama"], director: "Roberto Benigni", writerName: "Vincenzo Cerami", cast: ["Roberto Benigni"], rating: 8.6, imdb_votes: 700000, certification: "PG-13" },
{ id: 25, rank: 25, title: "Interstellar", year: 2014, duration: "169 min", genre: ["Adventure", "Sci-Fi"], director: "Christopher Nolan", writerName: "Jonathan Nolan, Christopher Nolan", cast: ["Matthew McConaughey", "Anne Hathaway"], rating: 8.6, imdb_votes: 2000000, certification: "PG-13" },
{ id: 26, rank: 26, title: "The Green Mile", year: 1999, duration: "189 min", genre: ["Crime", "Drama"], director: "Frank Darabont", writerName: "Stephen King, Frank Darabont", cast: ["Tom Hanks", "Michael Clarke Duncan"], rating: 8.6, imdb_votes: 1400000, certification: "R" },
{ id: 27, rank: 27, title: "Star Wars", year: 1977, duration: "121 min", genre: ["Action", "Adventure", "Sci-Fi"], director: "George Lucas", writerName: "George Lucas", cast: ["Mark Hamill", "Harrison Ford"], rating: 8.6, imdb_votes: 1400000, certification: "PG" },
{ id: 28, rank: 28, title: "Terminator 2: Judgment Day", year: 1991, duration: "137 min", genre: ["Action", "Sci-Fi"], director: "James Cameron", writerName: "James Cameron", cast: ["Arnold Schwarzenegger", "Linda Hamilton"], rating: 8.6, imdb_votes: 1200000, certification: "R" },
{ id: 29, rank: 29, title: "Back to the Future", year: 1985, duration: "116 min", genre: ["Adventure", "Comedy"], director: "Robert Zemeckis", writerName: "Robert Zemeckis, Bob Gale", cast: ["Michael J. Fox", "Christopher Lloyd"], rating: 8.5, imdb_votes: 1300000, certification: "PG" },
{ id: 30, rank: 30, title: "Spirited Away", year: 2001, duration: "125 min", genre: ["Animation", "Fantasy"], director: "Hayao Miyazaki", writerName: "Hayao Miyazaki", cast: ["Rumi Hiiragi"], rating: 8.6, imdb_votes: 800000, certification: "PG" }
];

// 🔹 Root check
app.get("/", (req, res) => {
  res.send("Top Movies API is running");
});

// 🔹 Get all movies
app.get("/api/movies", (req, res) => {
  res.json(movies);
});

// 🔹 Get movie by ID
app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
});

// Get Movie By Search
app.get("/api/movies/:search",(req,  res) =>{
  const movie =movies.find(m => m.title.includes(req.params.search));
  if(!movie) return res.status(404).json({message: "Movie not found"});
  res.json(movie)
})


// 🔹 Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


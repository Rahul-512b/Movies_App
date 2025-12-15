
export const getMoviesByGenre = (movies,genre)=>{
    const filteredbygenre=genre?.length>0 ? movies?.length>0 && movies.filter(movie=> movie.genre.includes(genre)):movies
    console.log(filteredbygenre)
    return filteredbygenre
}
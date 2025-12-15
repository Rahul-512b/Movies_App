

export const getMoviesByRating =(movies,rating)=>{

    const filteredbyrating = rating>0 ? movies?.length>0 && movies.filter(movie =>movie.rating >= rating):movies
     return filteredbyrating 

}
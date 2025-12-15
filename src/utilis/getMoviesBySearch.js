
export const MoviesSearch=(movies,value)=>{
   value= value.toLowerCase();
    const filteredmovies =value?.length>0 ? movies?.filter(movie=>movie.title.includes(value) || 
    movie.director.toLowerCase().includes(value) || movie.writerName.toLowerCase().includes(value)):movies
    console.log(filteredmovies)
    return filteredmovies
}
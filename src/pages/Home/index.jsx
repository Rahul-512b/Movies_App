import { useEffect } from "react"
import Navbar from "../../components/Navbar/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../../api/movies"
import MovieCard from "../../components/moviecard"
import { Box,Grid } from "@mui/material"
import { MoviesSearch } from "../../utilis/getMoviesBySearch"
import { getMoviesByGenre } from "../../utilis/getmoviesbygenre"
import { getMoviesByRating } from "../../utilis/getMoviesByRating"

const Home =()=>{
const dispatch=useDispatch()
const {movies,searchValue,genre,rating} = useSelector(state=>state.movies)
console.log(movies)
const filteredMovies=MoviesSearch(movies,searchValue)
const filteredMoviesbygenre=getMoviesByGenre(filteredMovies,genre)
const filteredMoviesbyrating =getMoviesByRating(filteredMoviesbygenre,rating)
console.log(filteredMoviesbyrating)
useEffect(()=> {
    dispatch(getMovies())
},[])

    return(
        <>
            <Navbar/>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>              {
                    filteredMoviesbyrating?.length>0 && filteredMoviesbyrating.map(movie=><MovieCard key={movie.id} movie={movie}/>) 
                }
                </Grid> 
            </Box>
        </>
    )
}

export default Home
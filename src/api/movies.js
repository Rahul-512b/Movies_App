import axios from "axios"
import { setMovies } from "../slices/movieSlice"
const base ="http://localhost:3000/api/movies/"
export const getMovies = ()=>async dispatch =>{
    const url="http://localhost:3000/api/movies"
    try {
         const {data}=await axios.get(url)
         //console.log(data)
         dispatch(setMovies(data))
    }
    catch (err){
        return err
    }

}
export const getMoviesBySearch =(value) => async dispatch =>{
    const url =`${base}${value}`
    const {data} = await axios.get(url)
    dispatch(setMovies(data))
    console.log(data)
}

export const getMoviesById=(id)=>async dispatch =>{
    const url =`${base}${id}`;
    try {
        const {data} = await axios.get(url)
        dispatch(setMovies(data))
        console.log(data)
    }
    catch (err){
        return err
    }
}
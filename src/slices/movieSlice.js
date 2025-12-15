import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name:"movies",
    initialState:{movies:[],
        searchValue:"",
        genre:"",
        rating:0
    },
    reducers:{
        setMovies:(state,action)=>{
            state.movies=action.payload
        },
        setSeacrch:(state,action)=>{
            state.searchValue=action.payload
        },
        setGenre:(state,action)=>{
            state.genre=action.payload
        },
        setRating:(state,action)=>{
            state.rating=action.payload
        }
    }
})

export const {setMovies,setSeacrch,setGenre,setRating} =movieSlice.actions;

export default movieSlice.reducer;
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { setGenre , setRating } from '../../slices/movieSlice';
import { useDispatch,useSelector } from 'react-redux';

export default function Selector() {
  const [age, setAge] = React.useState('');
  const dispatch=useDispatch()
  const {genre}=useSelector(state=>state.movies)

  const handleChange = (event) => {
    console.log(event.target.value);
    dispatch(setGenre(event.target.value))
  };
  console.log(genre)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"Drama"}>Drama</MenuItem>
          <MenuItem value={"Crime"}>Crime</MenuItem>
          <MenuItem value={"Action"}>Action</MenuItem>
          <MenuItem value={"History"}>History</MenuItem>
          <MenuItem value={"Biography"}>Biography</MenuItem>
          <MenuItem value={"Adventure"}>Adventure</MenuItem>
          <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
          <MenuItem value={"Western"}>Western</MenuItem>
          <MenuItem value={"Sci-Fi"}>Sci-Fi</MenuItem>
          <MenuItem value={"Romance"}>Romance</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export const RatingSelector=()=> {
  const [age, setAge] = React.useState('');
  const dispatch=useDispatch()
  const {genre}=useSelector(state=>state.movies)

  const onRatingChange = (event) => {
    console.log(event.target.value);
    dispatch(setRating(event.target.value))
  };
  console.log(genre)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Rating"
          onChange={onRatingChange}
        >
          <MenuItem value={3}>GreaterThan 3</MenuItem>
          <MenuItem value={5}>GreaterThan 5</MenuItem>
          <MenuItem value={9}>GreaterThan 9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

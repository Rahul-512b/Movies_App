
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IconButton, Chip, Grid } from '@mui/material';
import FavoriteIcon from "@mui/icons-material/Favorite"
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';


export default function MovieCard({ movie }) {
    return (
        <Grid item sx={3}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Directed By: {movie.director}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Written By: {movie.writerName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Genre: <Chip label={movie.genre} />
                </Typography>

            </CardContent>
            <CardActions>
                <IconButton aria-label="add to favorites">
                    < FavoriteIcon/>
                </IconButton>
                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Duaration: {movie.duration}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <StarIcon/> {movie.rating}
                </Typography> 
            </CardActions>
        </Card>
        </Grid>
    );
}

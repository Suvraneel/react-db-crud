import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function create() {
    return (
        <Card sx={{
            width: '33%',
        }}>
            < br/>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                Create Works !
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Song Title
                </Typography>
                <TextField
                required
                id="filled-required"
                label="required"
                />
                <br />
                <br />
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Artist
                </Typography>
                <TextField
                required
                id="filled-required"
                label="required"
                />
                <br />
                <br />
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Genre
                </Typography>
                <TextField
                required
                id="filled-required"
                label="required"
                />

                <Typography variant="body2">
                an awesome tune
                <br />
                {'"Sike Beats"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

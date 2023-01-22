import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Checkbox,
    Typography
} from "@material-ui/core";
import {apiBaseUrl} from "../../utils/consts";
import {Link} from "react-router-dom";

const BreedCard = (props) => {
    const {breed} = props;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Link to={"/breed/"+breed.id}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="167"
                    image={apiBaseUrl + "\\" + breed.image}
                    alt={breed.name + " image"}
                />
                <CardContent>
                    <Typography variant="subtitle1" component="div">
                        {breed.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
        </Card>
    );
};

export default BreedCard;
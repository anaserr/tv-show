import React from 'react';
import { Container, Grid, ListItem , ListItemAvatar,ListItemText, Avatar, Typography} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    image: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginRight: '10px'
    },
}));
function TvShowItem(props) {
    const classes = useStyles();
    return(
        <ListItem alignItems="flex-start" >
            <ListItemAvatar>
                {props.show.image ? <Avatar variant="rounded" src={props.show.image.medium} className={classes.image} /> :
                    <Avatar variant="rounded" className={classes.image}>
                        <ImageIcon />
                    </Avatar>
                }
            </ListItemAvatar>
            <ListItemText
                primary={
                    <div>
                        <Typography 
                            component="h5"
                            variant="h5"
                            color="textPrimary"
                        >
                            {props.show.name}
                        </Typography>
                        <Typography
                            component="span"
                            variant="h6"
                            color="textPrimary"
                        >
                            {`Language : ${props.show.language}`}
                            
                        </Typography>
                    </div>
                }
                secondary={
                        
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {`status : ${props.show.status}`}
                            
                        </Typography>
            }
            />
        </ListItem>
    )
}

export default TvShowItem;
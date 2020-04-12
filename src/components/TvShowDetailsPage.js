import React, { useState, useEffect } from 'react';
import { Avatar, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageIcon from '@material-ui/icons/Image';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '80%',
        margin: '10px auto',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 'auto',
      height: 'auto',
      minHeight: '30vw',
      marginRight: '20px'
    },
    gridItem: {
        marginTop: theme.spacing(2)
    }
  }));

function TvShowDetailsPage({match}){
    useEffect(() => {
        fetchData();
        return () => {
            console.log('done 2')
        }
    }, []);

    const [item, setItem] = useState({});

    const fetchData = async () => {
        const item = await fetch(`https://api.tvmaze.com/shows/${match.params.id}`)
            .then(res=>res.json());
        console.log(item);
        setItem(item);
    }

    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={4}>
                {item.image ? <Avatar variant="rounded" src={item.image.original} className={classes.cover} /> :
                    <Avatar variant="rounded" className={classes.cover}>
                        <ImageIcon />
                    </Avatar>
                }
            </Grid>
            <Grid item xs={12} sm={8}>
                <div className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                        {item.status}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                        <div dangerouslySetInnerHTML={{__html: item.summary}}></div>
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} style={{textAlign: 'right'}} className={classes.gridItem}>
                <Button variant="contained" size="medium" color="primary" href={item.url}>
                    More
                </Button>
            </Grid>
        </Grid>
    )
}
export default TvShowDetailsPage;
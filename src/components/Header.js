import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    header: {
      flexGrow: 1,
    },
    homeButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
        background: '#3C948B'
    }
  }));

function Header(){
    const classes = useStyles();
    return(
        <header className={classes.header}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="home">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Nobo TV Show</Typography>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;

import React from 'react'
import { Container, Typography, Link, IconButton } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.grey[200],
        color: '#3C948B',
        textAlign: "center"
    },
    button: {
        marginRight: theme.spacing(2),
    },
}))
function Footer() {
    const classes = useStyles();
    return(
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body1" >NOBO TV Show search engine</Typography>
                <Typography variant="body2" color="textSecondary">
                Copyright ©  
                <Link color="inherit" href="/">
                    NOBO TV SHOW
                </Link>
                {` ${new Date().getFullYear()-5} - ${new Date().getFullYear()}.`}
                
                </Typography>
                <IconButton edge="start" className={classes.button} color="inherit" aria-label="facebook">
                    <FacebookIcon />
                </IconButton>
                <IconButton edge="start" className={classes.button} color="inherit" aria-label="twitter">
                    <TwitterIcon />
                </IconButton>
                <IconButton edge="start" className={classes.button} color="inherit" aria-label="instagram" target="_blank" href="https://www.instagram.com/anas_err01/">
                    <InstagramIcon />
                </IconButton>
                <IconButton edge="start" className={classes.button} color="inherit" aria-label="youtube">
                    <YouTubeIcon />
                </IconButton>
            </Container>
        </footer>
    )
}

export default Footer;
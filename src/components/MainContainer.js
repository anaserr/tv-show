import React, {useState, useEffect} from 'react';
import { Container, TextField, Grid, Button, LinearProgress, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TvShowItem from './TvShowItem';



const useStyles = makeStyles(theme => ({
    main: {
        flexGrow: 1,
        marginTop: '20px',
        minHeight: '70vh'
    },
    button: {
        color: '#fff',
        backgroundColor: '#3F3F3F'
    },
    progressBar: {
        width: '100%',
        marginTop: theme.spacing(2)
    },
    image: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginRight: '10px'
    },
}))



function MainContainer() {
    const classes = useStyles();

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [listShow, setListShow] = useState([ ]);
    const [queryBtnClick, setQueryBtnClick] = useState('');

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setListShow(data);
                setLoading(false);
            });
            
        return () => {
            console.log('done');
        }
    }, [queryBtnClick]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(query);
        setLoading(true);
        setQueryBtnClick(query);
    }

    return(
        <Container maxWidth="md" className={classes.main}>
        <form onSubmit={submitHandler}>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={10}>
                <TextField 
                    id="query"
                    label="name"
                    fullWidth
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                /> 
            </Grid>
            <Grid item xs={12} sm={2}>
                <Button
                    variant="contained"
                    size="large"
                    className={classes.button}
                    endIcon={<SearchIcon />}
                    type="submit"
                    fullWidth
                >
                    Search
                </Button>
            </Grid>
        </Grid>
        </form>
        <div className={classes.progressBar}>
            {
                loading ? <LinearProgress/> :
                <List>
                    {
                    listShow.map(item => 
                        
                        <TvShowItem show={item.show} key={item.show.id}/>
                    )}
                </List>
            }
        </div>
        
        </Container>
    )
}

export default MainContainer;
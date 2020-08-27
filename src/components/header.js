import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';
import avatar from '../images/avatar.jpg';
import Typed from 'react-typed';
import zIndex from '@material-ui/core/styles/zIndex';


// CSS STYLES 
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: 'tomato',
    },
    subtitle: {
        color: 'tan',
        marginBottom: '3em',
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1,
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer} >
            <Grid container justify='center'>
            <Avatar className={classes.avatar} src={avatar} alt='Shagun' />
            </Grid>
            <Typography variant='h4' className={classes.title}>
                <Typed strings={['Shagun']} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant='h4'>
                <Typed
                    strings={['Web Development', 'Python / Django / Flask', 'JavaScript / NodeJS / Express',  'Firebase / MS Access / SQL']} 
                    typeSpeed={40}
                    backSpeed={60}
                    loop />
            </Typography>
        </Box>
    )
}

export default Header;

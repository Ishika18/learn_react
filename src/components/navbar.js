import React,  {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuslider from "@material-ui/core/Drawer";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from '@material-ui/icons';
import avatar from '../images/avatar.jpg';

// CSS STYLES
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%",
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    ListItem: {
        color: 'tan',
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        ListText: 'Home',
    },
    {
        listIcon: <AssignmentInd/>,
        ListText: 'Resume',
    },
    {
        listIcon: <Apps/>,
        ListText: 'Portfolio',
    },
    {
        listIcon: <ContactMail/>,
        ListText: 'Contact',
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    };

    const classes = useStyles();

    const sideList = slider => (
        <Box 
            className={classes.menuSliderContainer} 
            component='div'
            onClick={toggleSlider(slider, false)}
        >
                <Avatar className={classes.avatar} src={avatar} alt='Shagun'/>
                <Divider />
                <list>
                    {menuItems.map((lsItem, key) => (
                        <ListItem button key={key}>
                            <ListItemIcon className={classes.ListItem}>
                                {lsItem.listIcon}
                            </ListItemIcon>
                            <ListItemText className={classes.ListItem} primary={lsItem.ListText} />
                        </ListItem>
                    ))}
                </list>
            </Box>
    )
    return (
        <>
            <Box component='nav'>
                <AppBar position='static' style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <ArrowBack style={{ color: 'tomato'}} />
                        </IconButton>
                        <Typography variant='h5' style={{ color: 'tan' }}>
                            Portfolio
                        </Typography>
                        <MobileRightMenuslider
                            anchor='right'
                            open={state.right} 
                            onClose={toggleSlider('right', false)}
                        >
                            {sideList('right')}
                        </MobileRightMenuslider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
import { Divider, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react" ;
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import makeStyles from '@mui/styles/makeStyles';


const useStyle=makeStyles((theme) => ({
    title : {
        flexGrow : 1,
    },
    tagline : {
        fontSize : 20 ,
        texttransform : "uppercase" ,
        justifyContent : "center",
        fontFamily : "Montserrat", 
    },
})) ;




const Header =  () => {

    const classes = useStyle();

    return (
        <> 
            <Toolbar>

                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" className={classes.title} >Blogging Website</Typography>

                <IconButton color="inherit">
                    <Badge color="error" badgeContent={4} >
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <IconButton color="inherit">
                    <AccountCircleIcon />
                </IconButton>

            </Toolbar>

            <Divider></Divider>

            <Toolbar className={classes.tagline}>Express your view</Toolbar>
        </>
    )
}

export default Header
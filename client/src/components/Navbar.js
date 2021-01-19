import React, { Component } from 'react';
import {AppBar, Toolbar, IconButton, Typography} from "@material-ui/core";

const Navbar=()=>{
    return(
        <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" color="inherit">
            CrickChain
            </Typography>
        </Toolbar>
        </AppBar>
    );
}

export default Navbar;
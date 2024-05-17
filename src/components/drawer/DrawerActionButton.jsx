import React from 'react';
import {Box, Fab} from "@mui/material";
import {red} from "@mui/material/colors";
import {MenuRounded} from "@mui/icons-material";
import MainContext from '../../context'
import {useContext} from "react";
function DrawerActionButton() {
    const {setDrawerOpen,drawerOpen} = useContext(MainContext)
    return (
        <>
            <Box sx={{display:{xs:'block',md:'none'},position:"absolute"}}>
                <Fab onClick={()=>setDrawerOpen(!drawerOpen)} sx={{backgroundColor:red[500],m:2}} aria-label="SidebarContainer" size={"small"} >
                    <MenuRounded  sx={{color:"white"}}/>
                </Fab>
            </Box>
        </>
    );
}

export default DrawerActionButton;
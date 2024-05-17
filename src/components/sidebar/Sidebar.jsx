import React from 'react';
import {Box, Drawer, Fab} from "@mui/material";
import {red} from "@mui/material/colors";
import {MenuRounded} from "@mui/icons-material";
import {SidebarContent} from "./index";
import {useState} from "react";
import SidebarDrawer from "../drawer/SidebarDrawer";
import DrawerActionButton from "../drawer/DrawerActionButton";


function Sidebar() {

    return (
        <>

            <SidebarContent  />

        {/*    sidebar drawer*/}
        <SidebarDrawer />
        </>
    );
}

export default Sidebar;
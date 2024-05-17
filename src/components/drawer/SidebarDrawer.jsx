import React from 'react';
import {SidebarContent} from "../sidebar";
import {Drawer} from "@mui/material";
import MainContext from '../../context'
import {useContext} from "react";
function SidebarDrawer() {
    const {drawerOpen,setDrawerOpen} = useContext(MainContext)
    return (
        <>
            <Drawer  sx={{
                "& .MuiDrawer-paper":{width:400,overflow:"auto"},
                display:{xs:'block',sm:'block',md:"none",lg:"none",xl:"none"}
            }} open={drawerOpen} variant={"temporary"} onClose={()=>setDrawerOpen(false)}>
                <SidebarContent />
            </Drawer>
        </>
    );
}

export default SidebarDrawer;
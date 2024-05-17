import React from 'react';
import {Avatar, Box, Divider, Drawer, Hidden, Tab, Tabs, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {SidebarTabs,SidebarFooter,SidebarHeader} from './index'

function SidebarContent() {


    return (
        <>
            <Box sx={{textAlign:"center",justifyContent:"center",marginTop:2}}>

                {/*    sidebar header*/}
                <SidebarHeader  />
                <Divider variant={"middle"} color={grey[900]} sx={{marginTop:2}}/>

                <SidebarTabs  />
                <Divider variant={"middle"} color={grey[900]} sx={{marginTop:2}}/>
                {/* sidebar footer */}
                <SidebarFooter />
            </Box>
        </>
    );
}

export default SidebarContent;
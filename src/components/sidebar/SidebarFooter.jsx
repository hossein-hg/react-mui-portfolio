import React from 'react';
import {Box, Typography} from "@mui/material";
import {CopyrightRounded, FavoriteRounded} from "@mui/icons-material";

function SidebarFooter(props) {
    return (
        <>
            <Box sx={{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:100}}>
                <Typography variant={"subtitle2"} color="text.primary">
                    طراحی شده با {"  "}
                    <FavoriteRounded sx={{verticalAlign:"middle",color:"tomato",height:20}} />
                </Typography>

                <Typography variant={"caption"} color="text.primary" sx={{marginTop:2}}>کپی رایت 1402{"  "}
                    <CopyrightRounded sx={{verticalAlign:"middle",color:"tomato",height:20}} />
                </Typography>
            </Box>
        </>
    );
}

export default SidebarFooter;
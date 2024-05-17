import React from 'react';
import {Typography} from "@mui/material";
import {KeyboardArrowLeftRounded} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

function DevInfo({children}) {
    return (
        <>
            <Typography variant="body1" color="black" sx={{mt:2}} textAlign="left" >
                <KeyboardArrowLeftRounded sx={{verticalAlign:"bottom",color:"primary.main"}} />
                {children}
            </Typography>
        </>
    );
}

export default DevInfo;
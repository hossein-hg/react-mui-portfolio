import React, {useContext} from 'react';
import {Box, Fab, useTheme} from "@mui/material";
import {red} from "@mui/material/colors";
import {MenuRounded, NightlightOutlined} from "@mui/icons-material";
import mainContext from '../context'
import {WbSunnyOutlined} from '@mui/icons-material'
function ThemeActionButton() {
    const theme = useTheme();
    const {handleChangeMode} = useContext(mainContext)
    return (
        <>
            <Box sx={{display:{xs:'none',md:'block'},position:"absolute"}}>
                <Fab variant={"extended"} onClick={handleChangeMode} sx={{color:"whitesmoke",ml:2}} aria-label="ThemeChanger" color={"secondary"} size={"small"} >
                    {theme.palette.mode === 'dark' ? <WbSunnyOutlined sx={{mr:1}} /> : <NightlightOutlined sx={{mr:1}} />}
                    {theme.palette.mode === 'dark' ? "تم روز" : "تم شب"}

                </Fab>
            </Box>
        </>
    );
}

export default ThemeActionButton;
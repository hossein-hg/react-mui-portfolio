import React from 'react';
import {Box, Divider, Chip, Typography, Badge} from "@mui/material";
import html from '../../../assets/icons/html5-original.svg'
import LinearProgress from '@mui/material/LinearProgress';
function Skill({icon,color,name,value}) {
    return (
        <>
            <Divider textAlign="left" sx={{
                "&::before, &::after":{
                    borderColor:`${color}.main`,
                }
            }}>
                <Chip color={color} label={name} icon={
                    <Box component="img" sx={{height:30}} src={icon} />
                } sx={{color:"#000", p:3}} />
            </Divider>
            <Box sx={{display:"flex",alignItems:"center"}}>
                <Box sx={{minWidth:35,ml:2}}>
                    <Typography variant="body2" color="purple">
                        <Badge color={color} variant={"standard"}  badgeContent={`${Math.round(value)}%`} />

                    </Typography>
                </Box>
                <Box sx={{width:"100%",mr:1,mt:1}} >
                    <LinearProgress sx={{height:10,borderRadius:2}} variant={"determinate"} value={value} color={color} />
                </Box>
            </Box>
        </>
    );
}

export default Skill;
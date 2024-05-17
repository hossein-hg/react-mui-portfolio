import React, {useState} from 'react';
import {Avatar, Box, IconButton, Typography} from "@mui/material";
import {RandomReveal} from 'react-random-reveal'
import avatar from '../../assets/avatar.jpg'
import {alphabet} from "../../constants/alphabet";
import {GitHub, Instagram, Telegram, YouTube} from "@mui/icons-material";
import ThemeActionButton from "../ThemeActionButton";

function SidebarHeader(props) {
    const [start, setStart] = useState(false)
    return (
        <>
            <ThemeActionButton />
            <Avatar src={"https://barnamenevisan.info/content/images/user/DefaultAvatar.png"} variant={"rounded"} sx={{height:"10rem",width:"10rem",margin:"0 auto",display:{md:"block",sm:"none",xs:"none",lg:"block",xl:"block"}}} >
                HG
            </Avatar>

            <Typography color="secondary"  variant={"h6"}>
                <RandomReveal onComplete={()=>{setStart(true)}} characterSet={alphabet} isPlaying characters={"حسین قیاسی"} duration={4} />
            </Typography>
            {start && (
                <Typography color="whitesmoke"  variant={"caption"}>
                    <RandomReveal characterSet={alphabet} isPlaying characters={"توسعه دهنده فول استک"} duration={4} />
                </Typography>
            )}
            <Box component="div" sx={{margin:"0 auto",textAlign:"center"}}>
                <IconButton aria-label="Github" >
                    <a href="http://github.com" target="_blank" >
                        <GitHub sx={{color:"gray"}} />
                    </a>
                </IconButton>
                <IconButton aria-label="Instagram" >
                    <a href="http://instagram.com" target="_blank" >
                        <Instagram sx={{color:"gray"}} />
                    </a>
                </IconButton>
                <IconButton aria-label="Telegram" >
                    <a href="http://telegram.com" target="_blank" >
                        <Telegram sx={{color:"gray"}} />
                    </a>
                </IconButton>
                <IconButton aria-label="Youtube" >
                    <a href="http://Youtube.com" target="_blank" >
                        <YouTube sx={{color:"gray"}} />
                    </a>
                </IconButton>
            </Box>
        </>
    );
}

export default SidebarHeader;
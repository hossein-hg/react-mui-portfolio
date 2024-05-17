import React, {useCallback, useEffect, useRef, useState} from 'react';
import bg01 from "../../assets/bg02-min.jpeg";
import {Box, Typography} from "@mui/material";

import {links} from "../../constants/psrticles";
import Particles from "react-particles";
import {loadSlim} from "tsparticles-slim";
import Typed from 'typed.js'
import TextTransition, {presets} from "react-text-transition";
import {Helmet} from "react-helmet-async";

function Home({helmetTitle}) {
    // const strings = [
    //     "من یک توسعه دهنده فول استک هستم",
    //     "من یک مدرس برنامه نویسی هستم",
    //     "من یک فریلنسر هستم",
    //     "من یک محتواساز دنیا برنامه نویسی هستم",
    // ];
    const strings = [
        " توسعه دهنده فول استک هستم",
        " مدرس برنامه نویسی هستم",
        " فریلنسر هستم",
        " محتواساز دنیا برنامه نویسی هستم",
    ];
    const nameEl = useRef(null);
    const infoEl = useRef(null);
    const [index, setIndex] = useState(0)
    useEffect(() => {
            const typedName = new Typed(nameEl.current, {
                strings: ["[حسین قیاسی]"],
                typeSpeed: 60,
                backSpeed: 20,
                backDelay: 10,
                showCursor: false,
            });

            // const typedInfo = new Typed(infoEl.current,{
            //     strings:strings,
            //     startDelay:1500,
            //     typeSpeed:80,
            //     backSpeed:50,
            //     backDelay:50,
            //     showCursor:false,
            //     loop:true,
            //
            // });
            const stringsTransition = setInterval(() => {
                setIndex(index => index + 1)
            }, 3000)
            return () => {
                // typedInfo.destroy()
                typedName.destroy()
                clearInterval(stringsTransition)
            }
        }
        , [])
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <>
            <Helmet>
                <title>{helmetTitle}   </title>
            </Helmet>
            <Box sx={{
                backgroundImage: `url(${bg01})`
                , height: "100vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Typography ref={nameEl} sx={{color: "tomato"}} variant="h3">
                    {/*<ReactTyped typeSpeed={100} strings={["حسین قیاسی"]} />*/}
                </Typography>
                <Particles style={{maxWidth: "70%"}}
                           id="tsparticles"
                           init={particlesInit}
                           loaded={particlesLoaded}
                           options={links}

                />
                {/*<Typography ref={infoEl} sx={{color:"whitesmoke",textDecoration:"underline",textDecorationColor:"#1976d2"}} variant="h4">*/}

                {/*</Typography>*/}
                <Box sx={{display:"flex"}}>
                    <Typography variant={"h4"} sx={{color: "whitesmoke", textDecoration: "none",mr:1}}>
                        من یک
                    </Typography>
                <TextTransition springConfig={presets.pretty}>
                    <Typography
                                sx={{color: "whitesmoke", textDecoration: "underline", textDecorationColor: "#F93c92"}}
                                variant="h4">
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>

                </Box>
            </Box>
        </>
    );
}

export default Home;
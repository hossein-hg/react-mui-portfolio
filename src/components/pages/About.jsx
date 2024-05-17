import React, { useState, useEffect } from "react";
import {Skill} from "./components";
import CountUp from "react-countup";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Divider,
    Chip,
    Avatar,
    Tooltip,
} from "@mui/material";
import {devWorkInfo} from "../../constants/details";
import {devSkills} from "../../constants/skills";
import Grid from "@mui/material/Unstable_Grid2";
import avatar from '../../assets/avatar.jpg'
import {ArrowLeftRounded, CodeRounded, KeyboardArrowLeftRounded, SelfImprovementRounded} from "@mui/icons-material";
import {DevInfo} from "./components";
import {Helmet} from "react-helmet-async";




const About = ({helmetTitle}) => {
    const [html,setHtml] = useState(0);
    const [css,setCss] = useState(0);
    const [javascript,setJavascript] = useState(0);
    const [git,setGit] = useState(0);
    const [react,setReact] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setJavascript((old)=>{
                const diff = Math.random() * 10;
                return Math.min(old+diff,82)

            })

            setHtml((old)=>{
                const diff = Math.random() * 10;
                return Math.min(old+diff,96)

            })

            setCss((old)=>{
                const diff = Math.random() * 10;
                return Math.min(old+diff,91)

            })

            setGit((old)=>{
                const diff = Math.random() * 10;
                return Math.min(old+diff,90)

            })

            setReact((old)=>{
                const diff = Math.random() * 10;
                return Math.min(old+diff,78)

            })


        },100)
        return ()=>{
            clearInterval(timer)
        }
    },[])
    return (
        <>
            <Helmet>
                <title>{helmetTitle} </title>
            </Helmet>
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY:"scroll"
            }}
        >
            <CardContent>
                <Grid container sx={{ mx: 3 }}>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}>

                        <Avatar src={"https://barnamenevisan.info/content/images/user/DefaultAvatar.png"} variant="rounded" sx={{height:250,width:250,display:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"},margin:"0 auto"}}>
                            BG
                        </Avatar>

                    </Grid>
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8}>

                        <Divider textAlign="left" sx={{
                            "::before,::after":{
                                borderColor:"primary.main"
                            }
                        }}>
                            <Chip
                                color="primary"
                                icon={<CodeRounded />}
                                label={
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        sx={{ textAlign: "center" }}
                                    >
                                        توسعه دهنده فول استک و مدرس برنامه نویسی
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>

                        <Grid  container sx={{display:"flex",justifyContent:"space-between"}}>
                            <Grid id={1} xs={12} sm={8} md={9} lg={9} >
                                <DevInfo >
                                    نام و نام خانوادگی: حسین قیاسی
                                </DevInfo>
                                <DevInfo >
                                    سن: 28
                                </DevInfo>
                                <DevInfo >
                                    شهر: مشهد
                                </DevInfo>
                                <DevInfo >
                                    آدرس ایمیل: ghiasihosein2015@gmail.com
                                </DevInfo>
                            </Grid>

                            <Grid  id={2} xs={4} sm={4}  sx={{display:{
                                xs:"none",
                                sm:"block",
                                md:"block",
                                }}}>
                                {devWorkInfo.map((item,index)=>(
                                    <Box component={"div"} sx={{width:1,mb:2}} key={index}>
                                        <Tooltip title={item.tooltipTitle} placement={"right"} arrow >
                                        <Chip sx={{padding:2,backgroundColor:item.color,width:1}} icon={item.icon} label={
                                            <Typography variant={"body1"} sx={{color:"whitesmoke"}} >
                                                <CountUp end={item.total} start={0} duration={3} />
                                            </Typography>
                                        } />
                                        </Tooltip>
                                    </Box>
                                    ))}
                            </Grid>

                        </Grid>


                    </Grid>
                </Grid>

                <Grid container>
                    <Grid sx={{width:1,mt:1}}>
                        <Divider textAlign="center" sx={{
                            "::before,::after":{
                                borderColor:"secondary.main"
                            }
                        }}>
                            <Chip
                                color="secondary"
                                icon={<SelfImprovementRounded />}
                                label={
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        sx={{ textAlign: "center" }}
                                    >
                                        مهارت های من
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>
                        <Skill  name={devSkills.htmlSkill.name} value={html} icon={devSkills.htmlSkill.icon} color={devSkills.htmlSkill.color}/>
                        <br/>
                        <Skill  name={devSkills.cssSkill.name} value={css} icon={devSkills.cssSkill.icon} color={devSkills.cssSkill.color}/>
                        <br/>
                        <Skill  name={devSkills.gitSkill.name} value={git} icon={devSkills.gitSkill.icon} color={devSkills.gitSkill.color}/>
                        <br/>
                        <Skill  name={devSkills.jsSkill.name} value={javascript} icon={devSkills.jsSkill.icon} color={devSkills.jsSkill.color}/>
                        <br/>
                        <Skill  name={devSkills.reactSkill.name} value={react} icon={devSkills.reactSkill.icon} color={devSkills.reactSkill.color}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </>
    );
};

export default About;

import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet-async";
import {Card, CardContent, Chip, Divider, Grid, Typography, Slide} from "@mui/material";
import {grey} from "@mui/material/colors";
import {devEdu} from "../../constants/details";
import {CodeRounded, HomeRepairServiceRounded, SchoolRounded, SettingsEthernetRounded, CommentRounded} from "@mui/icons-material";
import {Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector} from "@mui/lab";

function Resume({helmetTitle}) {
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)

        return ()=>{
            setLoading(false)
        }
    },[])
    return (
        <>
            <Helmet>
                <title> {helmetTitle}</title>
            </Helmet>
            <Card
                sx={{
                    height: "100vh",
                    backgroundColor: "whitesmoke",
                    overflowY:"scroll"
                }}
            >
                <CardContent>
                    <Slide style={{ transitionDelay: loading ? '500ms' : '00ms' }}  direction="down" in={loading} >
                        <Divider textAlign="center" sx={{
                            "::before,::after":{
                                borderColor:"error.main"
                            }
                        }}>
                            <Chip
                                color="error"
                                icon={<SettingsEthernetRounded  />}
                                label={
                                    <Typography
                                        variant="body1"
                                        color="whitesmoke"
                                        sx={{ textAlign: "center" }}
                                    >
                                        توسعه دهنده فول استک و مدرس برنامه نویسی
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>
                    </Slide>

                    <Grid container  sx={{display:"flex",justifyContent:"center",mt:4}}>
                        <Grid sx={{color:"black"}} xs={6}>
                            <Slide style={{ transitionDelay: loading ? '500ms' : '00ms' }}  direction="left" in={loading} >
                            <Divider textAlign="center" sx={{
                                "::before,::after":{
                                    borderColor:"info.main"
                                }
                            }}>
                                <Chip

                                    color="info"
                                    icon={<HomeRepairServiceRounded color="action" />}
                                    label={
                                        <Typography

                                            variant="body1"
                                            color="whitesmoke"
                                            sx={{ textAlign: "center" }}
                                        >
                                            تجربیات
                                        </Typography>
                                    }
                                    sx={{ p: 3 }}
                                />
                            </Divider>
                            </Slide>
                            <Timeline position={"right"} >
                                {
                                    devEdu.map((item,index)=>(
                                        <Slide style={{ transitionDelay: loading ? `${index+1}99ms` : '00ms' }}  direction="up" in={loading} >
                                        <TimelineItem  key={index}>
                                            <TimelineSeparator>
                                                <TimelineDot color={"info"} variant={"outlined"}>
                                                    <HomeRepairServiceRounded />
                                                </TimelineDot>
                                                {index !== 3 ? (
                                                    <TimelineConnector />
                                                ) : null}
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant={"caption"} color={"gray"}>
                                                    {item.year}
                                                </Typography>
                                            </TimelineContent>
                                            <TimelineContent>
                                                <Typography variant={"body1"} color={"black"}>
                                                    {item.cert}
                                                </Typography>
                                            </TimelineContent>
                                            <TimelineContent>
                                                <Typography variant={"body2"} color={"black"}>
                                                    {item.major}
                                                </Typography>
                                            </TimelineContent>
                                            <TimelineContent>
                                                <Typography variant={"body2"} color={"black"}>
                                                    {item.place}
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        </Slide>
                                    ))
                                }
                            </Timeline>
                        </Grid>
                        <Grid sx={{color:"black"}} xs={6}>
                            <Slide style={{ transitionDelay: loading ? '500ms' : '00ms' }}  direction="right" in={loading} >
                            <Divider textAlign="center" sx={{
                                "::before,::after":{
                                    borderColor:"warning.main"
                                }
                            }}>
                                <Chip

                                    color="warning"
                                    icon={<SchoolRounded color="action" />}
                                    label={
                                        <Typography

                                            variant="body1"
                                            color="whitesmoke"
                                            sx={{ textAlign: "center" }}
                                        >
                                            تحصیلات
                                        </Typography>
                                    }
                                    sx={{ p: 3 }}
                                />
                            </Divider>
                            </Slide>
                            <Timeline position={"right"} >
                                {
                                    devEdu.map((item,index)=>(
                                        <Slide style={{ transitionDelay: loading ? `${index+1}99ms` : '00ms' }}  direction="up" in={loading} >
                                        <TimelineItem  key={index}>
                                            <TimelineSeparator>
                                                <TimelineDot color={"info"} variant={"outlined"}>
                                                    <SchoolRounded />
                                                </TimelineDot>
                                                {index !== 3 ? (
                                                    <TimelineConnector />
                                                ) : null}
                                            </TimelineSeparator>
                                            <TimelineContent>
                                               <Typography variant={"caption"} color={"gray"}>
                                                   {item.year}
                                               </Typography>
                                            </TimelineContent>
                                            <TimelineContent>
                                                <Typography variant={"body1"} color={"black"}>
                                                    {item.cert}
                                                </Typography>
                                            </TimelineContent>
                                            <TimelineContent>
                                                <Typography variant={"body2"} color={"black"}>
                                                    {item.major}
                                                </Typography>
                                            </TimelineContent>
                                            <TimelineContent>
                                                <Typography variant={"body2"} color={"black"}>
                                                    {item.place}
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        </Slide>
                                    ))
                                }
                            </Timeline>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}

export default Resume;
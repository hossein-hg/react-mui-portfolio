import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet-async";
import {
    Card,
    CardContent,
    CardMedia,
    Chip,
    Divider,
    Grid,
    Slide,
    Typography,
    CardActionArea,
    CardActions,
    Button
} from "@mui/material";
import EllipsisText from 'react-ellipsis-text'
import {School, SettingsEthernetRounded} from "@mui/icons-material";
import {courses} from "../../constants/courses";
function Coures({helmetTitle}) {
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
                                icon={<School  />}
                                label={
                                    <Typography
                                        variant="body1"
                                        color="whitesmoke"
                                        sx={{ textAlign: "center" }}
                                    >
                                        دوره های من
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>
                    </Slide>
                    <Grid container sx={{mx:2, mt:3}}>
                        {
                            courses.map((course,index)=>(
                                <Grid xs={12} sm={6} md={6} lg={4} sx={{px:2, mb:2}} key={index}>
                                    <Slide style={{ transitionDelay: loading ? `${index+3}99ms` : '00ms' }}  direction="up" in={loading} >
                                        <Card sx={{maxWidth:345,backgroundColor:"steelblue"}}>
                                            <CardActionArea>
                                                <CardMedia component={"img"}  image={course.image} alt={course.title} />
                                                <CardContent>
                                                    <Typography variant={"body1"} sx={{textAlign:"left"}} gutterBottom >{course.title}</Typography>
                                                    <Typography variant={"body2"} sx={{textAlign:"left"}} gutterBottom color={"text.secondary"} >
                                                        <EllipsisText text={course.info} length={"100"} />
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions >
                                                <Button  href={course.link} size={"small"} color={"primary"} target={"_blank"}>اطلاعات بیشتر</Button>
                                            </CardActions>
                                        </Card>
                                    </Slide>
                                </Grid>
                            ))
                        }
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}

export default Coures;
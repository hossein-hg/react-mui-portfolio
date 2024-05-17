import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet-async";
import Slider from "react-slick";
import {Avatar, Box, Card, CardContent, Chip, Divider, Typography} from "@mui/material";
import {userComments} from "../../constants/details";
import { CommentRounded} from "@mui/icons-material";
function Comments({helmetTitle}) {
    const [loading, setLoading] = useState(false)
    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: "linear",
    };
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
                        overflowY:"scroll",
                        display:"flex",
                        flexDirection:"column"
                    }}
                >
                    <CardContent>
                        <Divider textAlign="center" sx={{
                            "::before,::after":{
                                borderColor:"success.main"
                            }
                        }}>
                            <Chip
                                color={"success"}
                                icon={<CommentRounded />}
                                label={
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        sx={{ textAlign: "center" }}
                                    >
                                        نظرات دانشجویان دوره های من
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>
                        <Box component={"div"} sx={{mt:10}}>
                            <Slider {...options}>
                                {
                                    userComments.map((user,index)=>(
                                        <Box sx={{justifyContent:"center"}} component={"div"} key={index}>
                                            <Avatar src={user.avatar}  sx={{margin:"0 auto",height:100,width:100}} />
                                            <Typography textAlign={"center"} color="black" variant="body1">{user.fullName}</Typography>
                                            <Typography sx={{mb:2}} textAlign={"center"} color="black" variant="body2">{user.jobTitle}</Typography>
                                            <Card sx={{backgroundColor:"lightsalmon", width:1/2, margin:"0 auto",borderRadius:3}}>
                                                <CardContent>
                                                    <Typography variant={"body2"} textAlign={"center"}>{user.comment}</Typography>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    ))
                                }
                            </Slider>
                        </Box>
                    </CardContent>
                </Card>
        </>
    );
}

export default Comments;
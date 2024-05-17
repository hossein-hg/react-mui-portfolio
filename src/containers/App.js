import '../App.css';
import MainLayout from "../layouts/MainLayout";
import SidebarContainer from "./SidebarContainer";
import PagesContainer from "./PagesContainer";
import {useEffect, useState} from "react";
import Page from "../components/pages/components/Page";
import {Sidebar} from "../components/sidebar";
import MainContext from '../context'
import DrawerActionButton from "../components/drawer/DrawerActionButton";
import React from "react";
import {Home, About, Resume, Coures, Comments, Contact} from '../components/pages'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";




function App() {
    const tabPanels = [
        {index:0,content:'صفحه اصلی'},
        {index:1,content:'درباره من'},
        {index:2,content:'رزومه من'},
        {index:3,content:'نمونه کارها'},
        {index:4,content:'نظرات دانشجویان'},
        {index:5,content:'ارتباط با من'},
    ];
    const theme = useTheme()
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"))
    const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    useEffect(()=>{
        if (isMdUp){
            setDrawerOpen(false)
        }
    },[isMdUp])
    const [pageNumber, setPageNumber] = useState(0)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const handlePageNumber = (e, newValue) => {
        setPageNumber(newValue)
    }
    const [mode, setMode] = useState()
    useState(()=>{
        setMode(preferDarkMode ? 'dark' : 'light')

    },[])
    const handleChangeMode = ()=>{
        setMode(prev=> prev === 'light' ? 'dark' : 'light')
    }
    return (
        <>
            <MainContext.Provider value={{
                pageNumber,handlePageNumber,drawerOpen,setDrawerOpen,handleChangeMode
            }}>
                <MainLayout mode={mode}>
                    <SidebarContainer>
                        <Sidebar />
                    </SidebarContainer>
                    <DrawerActionButton  />
                    <PagesContainer>
                        {/*{tabPanels.map((t,index)=>(*/}
                        {/*    <Page key={index} index={t.index}>*/}
                        {/*        */}
                        {/*        <Typography sx={{textAlign: "center"}} variant="h6">*/}
                        {/*            {t.content}*/}
                        {/*        </Typography>*/}
                        {/*    </Page>*/}
                        {/*))}*/}

                        <Page index={0}>
                            <Home helmetTitle={"وب سایت شخصی من  "} />
                        </Page>

                        <Page index={1}>
                            <About helmetTitle={"درباره من"} />
                        </Page>

                        <Page index={2}>
                            <Resume helmetTitle={"رزومه من"} />
                        </Page>

                        <Page index={3}>
                            <Coures helmetTitle={"دوره های من"} />
                        </Page>

                        <Page index={4}>
                            <Comments helmetTitle={"نظرات دانشجویان"} />
                        </Page>

                        <Page index={5}>
                            <Contact helmetTitle={"ارتباط با من "} />
                        </Page>

                    </PagesContainer>
                </MainLayout>
            </MainContext.Provider>
        </>
    );
}

export default App;

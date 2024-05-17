import React, { useContext} from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {grey} from "@mui/material/colors";
import MainContext from '../../context'
import {tabsData} from "../../constants/tabsData";
import {useTheme} from "@mui/material/styles";

function SidebarTabs() {
    const {handlePageNumber,setDrawerOpen,pageNumber} = useContext(MainContext)
   const data = tabsData()
    const theme = useTheme()
    return (
        <>
            <Tabs value={pageNumber} pageNumber={pageNumber} onChange={handlePageNumber} orientation={"vertical"} variant={"scrollable"} scrollButtons={"auto"}  allowScrollButtonsMobile textColor={theme.palette.mode === 'dark' ? "secondary" : 'primary'} indicatorColor={theme.palette.mode === 'dark' ? "secondary" : 'primary'}>
                {data.map((t,index)=>(
                    <Tab key={index}
                        sx={{
                        "&.MuiTab-root":{
                            minHeight:50,
                            borderRadius:3,
                            marginX:1,

                            marginY:0.5,
                            backgroundColor:theme.palette.mode === 'dark' ? grey[800] : grey[500]
                        }
                    }}
                         onClick={()=>setDrawerOpen(false)}
                         {...t} label={t.label} icon={t.icon} iconPosition={"start"} />
                ))}


            </Tabs>
        </>
    );
}

export default SidebarTabs;
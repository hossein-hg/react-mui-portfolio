import {Box, Typography} from '@mui/material'
import MainContext from '../../../context'
import {useContext} from "react";
const Page = ({children, index, ...others})=>{
    const {pageNumber} = useContext(MainContext)
    return (
        <div
            role="tabpanel"
            hidden={pageNumber !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`sidebar-tab-${index}`}
            {...others}
        >
            {pageNumber === index && (
                <Box sx={{height:"100vh",overflow:"hidden"}}>
                    {children}
                </Box>
            ) }
        </div>
    )
}
export default Page
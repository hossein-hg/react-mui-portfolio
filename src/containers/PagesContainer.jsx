import Grid2 from "@mui/material/Unstable_Grid2";
import {Typography} from "@mui/material";

const PagesContainer = ({children})=>{
    return (
        <>
            <Grid2 xs={12} md={9} lg={9} xl={9} >
                {children}
            </Grid2>
        </>
    )
}
export default PagesContainer
import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material/styles";
import {darkTheme, lightTheme} from "./themes";
import {Helmet, HelmetProvider} from "react-helmet-async";

import Grid2 from "@mui/material/Unstable_Grid2";
import CreateCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const cacheRTL = CreateCache({
    key:'muirtl',
    stylisPlugins:[prefixer,rtlPlugin]
})
const MainLayout = ({children, mode})=>{
    const theme = mode === 'dark' ? darkTheme : lightTheme
    return (
        <CacheProvider value={cacheRTL} >
            <ThemeProvider theme={theme}>
                <HelmetProvider>

                    <Grid2 container sx={{height:"100vh"}}>

                           {children}

                    </Grid2>

                </HelmetProvider>

            </ThemeProvider>
        </CacheProvider>
    )
}
export default MainLayout
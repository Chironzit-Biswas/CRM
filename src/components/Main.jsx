import {Outlet} from "react-router";
import {Header} from "./Header.jsx";
import {Footer} from "./Footer.jsx";

export const Main = () => {
    return (
        <>
           <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
               
           </div>
        </>
    )
}
import {Outlet} from "react-router";
import {Header} from "./Header.jsx";
import {Footer} from "./Footer.jsx";
import {Discount} from "./Discount.jsx";

export const Main = () => {
    return (
        <>
           <div>
                <Header></Header>
                <Outlet></Outlet>
                <Discount></Discount>
                <Footer></Footer>
               
           </div>
        </>
    )
}
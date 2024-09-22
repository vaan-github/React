import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/Index";

export default function Layout(){
    return(
        <>
        <Header />

        <Outlet/> // For Nesting.

        <Footer/>
        </>
    )
}
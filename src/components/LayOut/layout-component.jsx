import { Outlet } from "react-router-dom"
import Header from "../Header/header-component"

const LayOut = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default LayOut
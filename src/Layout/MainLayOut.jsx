import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-8">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayOut;
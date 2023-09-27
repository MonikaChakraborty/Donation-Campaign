import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
// import CategoryDetails from "../pages/DonationDetails/DonationDetails";
import DonationDetails from "../pages/DonationDetails/DonationDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,     
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/categories.json')
            },

            {
                path: "/donation",
                element: <Donation></Donation>
            },

            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                // loader: () => fetch('/categories.json')
            },

            {
                path: "/categories/:title",
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/categories.json')
            }
        ]
    }
])

export default myCreatedRoute;
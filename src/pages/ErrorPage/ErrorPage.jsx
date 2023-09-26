import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
      
         <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-9xl font-extrabold ">404</h1> 
            <p className="text-3xl font-semibold">Page Not Found</p>
            <br />

            <Link to="/"><button className="btn bg-slate-300">Go To Home</button></Link>
        </div>
        
    );
};

export default ErrorPage;
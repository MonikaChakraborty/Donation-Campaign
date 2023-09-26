import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <nav className="flex flex-col md:flex-row px-5 py-6 justify-between items-center shadow-md">
        <Logo></Logo>
        <ul className="flex flex-col md:flex-row gap-12 text-xl">


          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " font-semibold text-[#FF444A] underline" : ""
              }
            >
              Home
            </NavLink>
            
          </li>


          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " font-semibold text-[#FF444A] underline" : ""
              }
            >
              Donation
            </NavLink>
            
          </li>



          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " font-semibold text-[#FF444A] underline" : ""
              }
            >
              Statistics
            </NavLink>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

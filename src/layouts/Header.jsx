import { NavLink } from "react-router-dom";
import { NavBar } from "/src/components/NavBar.jsx";
import logo from "/images/coloredLogoDevesset3.png";
import { BtnBurger } from "../components/BtnBurger";

export const Header = () => {
  return (
    <div className="header">
      <NavLink className="header__logo navBar__link" to="/">
        <img className="header__logo-img" src={logo} alt="Logo" />
      </NavLink>
      <BtnBurger/>
        <NavBar className="header__nav" />
    </div>
  );
};

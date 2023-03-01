import { useState } from "react";
import hamburger from "../../../assets/images/hamburger.svg";
import logo from "../../../assets/images/logo.svg";
import { Sidebar } from "./Sidebar";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
          <img
            src={hamburger}
            alt="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            className="navigation__image"
          />
          <img src={logo} alt="logo" />
        </div>
        <div className="navigation__account">
          <button className="btn">Log in</button>
          <button className="btn btn--active">Register</button>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

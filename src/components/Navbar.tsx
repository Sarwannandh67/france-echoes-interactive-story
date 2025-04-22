
import React from "react";
import { NavLink } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `inline-block px-4 py-2 rounded-md font-medium transition-colors ${
    isActive
      ? "bg-primary text-primary-foreground"
      : "text-gray-700 hover:bg-primary hover:text-primary-foreground"
  }`;

const Navbar = () => {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <NavLink to="/" className="text-2xl font-bold text-primary">
          Echoes of France
        </NavLink>
        <div className="flex items-center space-x-6">
          <NavLink to="/" className={linkClasses}>
            {({ isActive }) => (isActive ? (<>Accueil</>) : <>Home</>)}
          </NavLink>
          <NavLink to="/references" className={linkClasses}>
            {({ isActive }) => (isActive ? (<>Références</>) : <>References</>)}
          </NavLink>
          <NavLink to="/credits" className={linkClasses}>
            {({ isActive }) => (isActive ? (<>Crédits</>) : <>Credits</>)}
          </NavLink>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

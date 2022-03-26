import { FC } from "react";
import { Link } from "react-router-dom";
import { NavLinkProps } from "@interfaces/"

export const NavItem: FC<NavLinkProps> = ({ label, withIcon = false, isTheLastOne = false }) => {
  return (
    <li>
      <Link
        to="/"
        className={`nav-item-link ${isTheLastOne ? "uppercase" : ""}`}
      >
        {label}
        {withIcon ? <i className="fa fa-chevron-down text-xs ml-2"></i> : null}
      </Link>
    </li>
  );
};
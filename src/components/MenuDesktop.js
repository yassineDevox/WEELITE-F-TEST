import { Link } from "react-router-dom";
import logo from "assets/logo.png";

import {
  getLastItemIndex,
  isEqual,
  isUserHasMainAccount,
  isUserHasProAccount,
  isUserUndefined,
} from "helpers";

import { UserModel } from "models";
import { LINKS_DATA } from "constant";

const UserInfo = ({ data = new UserModel() }) => {
  return (
    <>
      <span className="rounded-[14px] bg-[#F2F2F2] text-sm px-3 p-1 font-normal">
        {data.typeAccount}
      </span>
      <img src={data.avatarURL} className="rounded-full w-12" alt="Avatar" />
      <span className="font-semibold text-sm ">
        {data.fullName}
        {isUserHasProAccount(data) && (
          <i className="fa fa-chevron-down text-xs ml-2"></i>
        )}
      </span>
    </>
  );
};

const NavItem = ({ label = "", withIcon = false, isTheLastOne = false }) => {
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

const NavList = ({ LinksKey }) => {
  return (
    <ul className="flex gap-6">
      {LINKS_DATA[LinksKey].map((l, i) => (
        <NavItem
          key={i}
          label={l}
          withIcon={isEqual(l, "les réglementations")}
          isTheLastOne={isEqual(i, getLastItemIndex(LINKS_DATA[LinksKey]))}
        />
      ))}
    </ul>
  );
};

const Default = () => {
  return (
    <>
      <button className="font-semibold text-sm">Créer un compte</button>
      <button className="bg-[#04F2F2] rounded-3xl p-3 text-base font-semibold">
        <i className="fas fa-sign-in mr-2"></i>
        Se connecter
      </button>
    </>
  );
};

const MenuDesktop = ({ loggedUser = new UserModel() }) => {
  return (
    <header
      className={`flex h-20 header-shadow ${
        isUserHasMainAccount(loggedUser)
          ? "justify-between px-5"
          : "justify-around"
      }`}
    >
      <div className=" flex items-center gap-8">
        {/* LOGO  */}
        <img className="logo" src={logo} alt="batireglo" />
        {/* NAVIGATION  */}
        <nav>
          <NavList
            LinksKey={
              isUserUndefined(loggedUser) ? "DEFAULT" : loggedUser.typeAccount
            }
          />
        </nav>
      </div>
      {/* USER INFOS  */}
      <div className="flex gap-4 items-center">
        {!isUserUndefined(loggedUser) ? (
          <UserInfo data={loggedUser} />
        ) : (
          <Default />
        )}
      </div>
    </header>
  );
};

export default MenuDesktop;

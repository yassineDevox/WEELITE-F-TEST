import { FC } from "react";
import { logo } from "assets/";
import { NavList, UserInfo, Default } from "components/";
import { isHeAGuest, isUserHasMainAccount } from "helpers/";
import { UserInfoProps } from "interfaces/";

const MenuDesktop: FC<UserInfoProps> = (user) => {


  return (
    <header
      className={`flex h-20 header-shadow ${isUserHasMainAccount(user.typeAccount)
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
            linksKey={user.typeAccount}
          />
        </nav>
      </div>
      {/* USER INFOS  */}
      <div className="flex gap-4 items-center">
        {!isHeAGuest(user.typeAccount) ? (
          <UserInfo
            typeAccount={user.typeAccount}
            fullName={user.fullName}
            id={user.id}
            avatarURL={user.avatarURL} />
        ) : (
          <Default />
        )}
      </div>
    </header>
  );
};

export default MenuDesktop;

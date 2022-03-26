import { FC } from "react";
import { logo } from "@assets/";
import { TypeAccountEnum, UserModel } from "@models/";
import { NavList, UserInfo,Default } from "@components/";
import { isUserHasMainAccount, isUserUndefined } from "@helpers/";
import { UserInfoProps } from "@interfaces/";

const MenuDesktop: FC<UserInfoProps> = ({user=new UserModel()}) => {
  
  return (
    <header
      className={`flex h-20 header-shadow ${
        isUserHasMainAccount({user}) =
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
            linksKey={
              isUserUndefined(loggedUser) ?
                TypeAccountEnum.DEFAULT : loggedUser.user.typeAccount
            }
          />
        </nav>
      </div>
      {/* USER INFOS  */}
      <div className="flex gap-4 items-center">
        {!isUserUndefined(loggedUser) ? (
          <UserInfo  user={loggedUser.user} />
        ) : (
          <Default />
        )}
      </div>
    </header>
  );
};

export default MenuDesktop;

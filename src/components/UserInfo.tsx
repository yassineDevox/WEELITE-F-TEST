
import { FC } from "react";
import { UserInfoProps } from "interfaces/";
import { isUserHasProAccount } from "helpers/";




export const UserInfo: FC<UserInfoProps> = (user ) => {
    return (
        <>
            <span className="rounded-[14px] bg-[#F2F2F2] text-sm px-3 p-1 font-normal">
                {user.typeAccount}
            </span>
            <img src={user.avatarURL} className="rounded-full w-12" alt="Avatar" />
            <span className="font-semibold text-sm ">
                {user.fullName}
                {isUserHasProAccount(user) && (
                    <i className="fa fa-chevron-down text-xs ml-2"></i>
                )}
            </span>
        </>
    );
};

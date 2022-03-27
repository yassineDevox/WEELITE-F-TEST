import MenuDesktop from "components/MenuDesktop"
import { UserModel } from "models"
import { FC } from "react"

interface IUserModel {
    user: UserModel
}
export const HocMenuDesktop: FC<IUserModel> = ({ user }) => {
    return (<MenuDesktop typeAccount={user.typeAccount}
        fullName={user.fullName}
        id={user.id}
        avatarURL={user.avatarURL} />)
}
import { TypeAccountEnum } from "src/models";

export interface NavLinkProps {
    label: string;
    withIcon: boolean;
    isTheLastOne: boolean  
}

export interface UserInfoProps {
    id:number;
    typeAccount: TypeAccountEnum;
    avatarURL?: string;
    fullName: string;
}


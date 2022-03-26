import { TypeAccountEnum } from "@models/";
import { UserInfoProps } from "@interfaces/";

export const isUserHasProAccount = ({ user }: UserInfoProps) =>
  isEqual(user.typeAccount, TypeAccountEnum.PRO);

export const isUserHasMainAccount = ( user : UserInfoProps) =>
  isEqual(user.typeAccount, TypeAccountEnum.MAIN);


export const isUserUndefined = (u: UserInfoProps) => 
isEqual(u.user, undefined)
export const isEqual = (a: any, b: any) => a === b
export const getLastItemIndex = (list: string[]) => list.length - 1


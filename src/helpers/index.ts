import { TypeAccountEnum } from "models/";
import { UserInfoProps } from "interfaces/";

export const isUserHasProAccount = (user: UserInfoProps) =>
  isEqual(user.typeAccount, TypeAccountEnum.PRO);

export const isUserHasMainAccount = (typeAccount: TypeAccountEnum) =>
  isEqual(typeAccount, TypeAccountEnum.MAIN);

export const isHeAGuest = (typeAccount: TypeAccountEnum) =>
  isEqual(typeAccount, TypeAccountEnum.DEFAULT);

export const isEqual = (a: any, b: any) => a === b
export const getLastItemIndex = (list: string[]) => list.length - 1


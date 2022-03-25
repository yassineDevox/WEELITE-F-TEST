const { TypeAccountEnum } = require("models");

export const isUserHasProAccount = ({ typeAccount: type }) =>
  type === TypeAccountEnum.PRO_ACCOUNT;

export const isUserHasMainAccount = ({ typeAccount: type }) =>
type === TypeAccountEnum.MAIN_ACCOUNT;


export const isUserUndefined = usr =>usr.id===0
export const isEqual = (a,b)=>a===b
export const getLastItemIndex = list=>list.length-1
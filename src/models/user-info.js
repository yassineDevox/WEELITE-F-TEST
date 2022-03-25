import { TypeAccountEnum } from "./type-account-enum";

export class UserModel {
  constructor(
    id = 0,
    typeAccount = TypeAccountEnum.PRO_ACCOUNT,
    fullName = "",
    avatarURL = ""
  ) {
    this.id = id;
    this.typeAccount = typeAccount;
    this.fullName = fullName;
    this.avatarURL = avatarURL;
  }
}

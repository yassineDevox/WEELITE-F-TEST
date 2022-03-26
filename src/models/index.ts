export enum TypeAccountEnum {
    PRO = "compte professionel",
    MAIN = "compte principale",
    DEFAULT = "DEFAULT"
}

export class UserModel {
    constructor(
        public id?: number,
        public typeAccount?: TypeAccountEnum,
        public fullName?: string,
        public avatarURL?: string) {
    }

}
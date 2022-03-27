export enum TypeAccountEnum {
    PRO = "compte professionel",
    MAIN = "compte principale",
    DEFAULT = "DEFAULT"
}

export class UserModel {
    constructor(
        public id: number=0,
        public typeAccount: TypeAccountEnum=TypeAccountEnum.DEFAULT,
        public fullName: string="",
        public avatarURL: string="") {
    }

}
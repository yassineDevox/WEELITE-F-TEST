import { TypeAccountEnum } from "models/";


const proAccountLinks = [
  "les réglementations",
  "forum",
  "quiz",
  "actualités",
  "faq",
];

export const LINKS_DATA = {
  DEFAULT: [
    "comment ca fonctione",
    proAccountLinks[0],
    "tarification",
    proAccountLinks[1],
    proAccountLinks[3],
    "faq",
  ],
  [TypeAccountEnum.PRO]: [...proAccountLinks],
  [TypeAccountEnum.MAIN]: ["tableau de bord", ...proAccountLinks],
};

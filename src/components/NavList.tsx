import { TypeAccountEnum } from "@models/";
import { FC } from "react";
import { getLastItemIndex, isEqual } from "@helpers/";
import { NavItem } from "./NavItem";
import { LINKS_DATA } from "src/constant";

export const NavList: FC<{ linksKey: TypeAccountEnum }> = ({ linksKey }) => {
    return (
      <ul className="flex gap-6">
        {LINKS_DATA[linksKey].map((l, i) => (
          <NavItem
            key={i}
            label={l}
            withIcon={isEqual(l, "les réglementations")}
            isTheLastOne={isEqual(i, getLastItemIndex(LINKS_DATA[linksKey]))}
          />
        ))}
      </ul>
    );
  };
  
import { NavLink as RouterNavLink } from "react-router-dom";
import { Link } from "@radix-ui/themes";
import type { ReactNode } from "react";

type Props = {
  to: string;
  children: ReactNode;
};

export const NavLink = ({ to, children }: Props) => {
  return (
    <RouterNavLink to={to} style={{ textDecoration: "none" }} end={to === "/"}>
      {({ isActive }) => (
        <Link
          size="2"
          weight={isActive ? "bold" : "regular"}
          color={isActive ? "jade" : "gray"}
          underline={isActive ? "always" : "hover"}
          aria-current={isActive ? "page" : undefined}
        >
          {children}
        </Link>
      )}
    </RouterNavLink>
  );
};

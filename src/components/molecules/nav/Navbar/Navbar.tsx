"use client";

import { useEffect, useState } from "react";
import { links } from "@/utils/constants/navbar-links-map";
import useBreakpoints from "@/hooks/use-breakpoints";
import { NavbarLinks } from "@/components/atoms/navbar/NavbarLinks/NavbarLinks";
import { NavLogo } from "@/components/atoms/navbar/NavbarLogo/NavbarLogo";
import { NavbarMenuButton } from "@/components/atoms/navbar/NavbarMenuButton/NavMenuButton";
import { Portal } from "@/components/molecules/Portal/Portal";
import { NavbarMenu } from "@/components/molecules/nav/NavbarMenu/NavbarMenu";
import { styles } from "./navbar.styles";

export const Navbar = () => {
  const { isTablet, isBase, isMobile } = useBreakpoints();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isTablet || isBase || isMobile) {
      return;
    }
    setIsMenuOpen(false);
  }, [isBase, isMobile, isTablet, setIsMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <NavLogo text="Token Discover" />
      <div className={styles.desktopNavLinksWrapper}>
        <NavbarLinks {...{ links }} />
      </div>

      <div className={styles.mobileNavLinksWrapper}>
        <NavbarMenuButton
          icon="list"
          variant="link"
          iconSize="xxl"
          onClick={handleToggleMenu}
          buttonWrapperStyles="gap-0"
        />
        <Portal>
          <NavbarMenu isMenuOpen={isMenuOpen} toggleMenu={handleToggleMenu} />
        </Portal>
      </div>
    </nav>
  );
};

"use client";

import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { links } from "@/utils/constants/links-object-map";
import useBreakpoints from "@/hooks/use-breakpoints";
import { NavbarLinks } from "@/components/atoms/navbar/NavbarLinks/NavbarLinks";
import { NavLogo } from "@/components/atoms/navbar/NavbarLogo/NavbarLogo";
import { NavbarMenuButton } from "@/components/atoms/navbar/NavbarMenuButton/NavMenuButton";
import { NavbarMenu } from "@/components/molecules/nav/NavbarMenu/NavbarMenu";
import { styles } from "./navbar.styles";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isTablet, isMobile } = useBreakpoints();

  useEffect(() => {
    if (isTablet || isMobile) {
      return;
    }
    onClose();
  }, [isMobile, isTablet, onClose]);

  return (
    <nav className={styles.navbar}>
      <NavLogo />
      <div className={styles.desktopNavLinksWrapper}>
        <NavbarLinks {...{ links }} />
      </div>

      <div className={styles.mobileNavLinksWrapper}>
        <NavbarMenuButton {...{ onOpen }} />
        <NavbarMenu {...{ isOpen, onClose }} />
      </div>
    </nav>
  );
};

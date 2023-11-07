"use client";

import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { links } from "@/utils/constants/links-object-map";
import useBreakpoints from "@/hooks/use-breakpoints";
import { NavbarLinks } from "@/components/atoms/navbar/NavbarLinks/NavbarLinks";
import { NavLogo } from "@/components/atoms/navbar/NavbarLogo/NavbarLogo";
import { NavbarMenuButton } from "@/components/atoms/navbar/NavbarMenuButton/NavMenuButton";
import { NavbarMenu } from "@/components/molecules/nav/NavbarMenu/NavbarMenu";
import { navbar } from "./Navbar.variants";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLargeDesktop, isDesktop, isTablet, isMobile } = useBreakpoints();

  useEffect(() => {
    if (isTablet || isMobile) {
      return;
    }
    onClose();
  }, [isMobile, isTablet, onClose]);

  return (
    <nav className={navbar()}>
      <NavLogo />
      {(isDesktop || isLargeDesktop) && <NavbarLinks {...{ links }} />}
      {(isMobile || isTablet) && (
        <>
          <NavbarMenuButton {...{ onOpen }} />
          <NavbarMenu {...{ isOpen, onClose }} />
        </>
      )}
    </nav>
  );
};

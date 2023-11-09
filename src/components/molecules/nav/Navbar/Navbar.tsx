"use client";

import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { links } from "@/utils/constants/links-object-map";
import useBreakpoints from "@/hooks/use-breakpoints";
import { NavbarLinks } from "@/components/atoms/navbar/NavbarLinks/NavbarLinks";
import { NavLogo } from "@/components/atoms/navbar/NavbarLogo/NavbarLogo";
import { NavbarMenuButton } from "@/components/atoms/navbar/NavbarMenuButton/NavMenuButton";
import { NavbarMenu } from "@/components/molecules/nav/NavbarMenu/NavbarMenu";

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
    <nav className="flex items-center justify-between px-[3rem] base:py-[2rem] md:px-[5rem]">
      <NavLogo />
      <div className="base:hidden lg:flex">
        <NavbarLinks {...{ links }} />
      </div>

      <div className="base:flex lg:hidden">
        <NavbarMenuButton {...{ onOpen }} />
        <NavbarMenu {...{ isOpen, onClose }} />
      </div>
    </nav>
  );
};

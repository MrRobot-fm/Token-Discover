import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect } from "react";
import { links } from "@/utils/constants/navbar-links-map";
import { useScrollBehavior } from "@/hooks/use-scroll-behavior";
import { Button } from "@/components/atoms/Button/Button";
import { NavLogo } from "@/components/atoms/navbar/NavbarLogo/NavbarLogo";
import { NavbarMenuButton } from "@/components/atoms/navbar/NavbarMenuButton/NavMenuButton";
import type { NavbarMenuProps } from "./NavbarMenu.props";
import { styles } from "./NavbarMenu.styles";

export const NavbarMenu = (props: NavbarMenuProps) => {
  const { isMenuOpen, toggleMenu } = props;

  const segment = useSelectedLayoutSegment();

  const { disableScroll, enableScroll } = useScrollBehavior();

  useEffect(() => {
    if (isMenuOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [disableScroll, enableScroll, isMenuOpen]);

  return (
    <div
      className={`${
        isMenuOpen
          ? `${styles.navbarMenu_translateXToOrigin} ${styles.opacity_1}`
          : `${styles.navbarMenu_translateXToHidden} ${styles.opacity_0}`
      } ${styles.navbarMenu_overlay}`}
    >
      <aside
        className={`${
          isMenuOpen
            ? styles.navbarMenu_translateXToOrigin
            : styles.navbarMenu_translateXToHidden
        } ${styles.navbarMenu}`}
      >
        <div className={styles.navbarMenu_header}>
          <NavLogo text="token discover" />
          <NavbarMenuButton
            icon="close"
            variant="link"
            size="lg"
            onClick={toggleMenu}
            buttonWrapperStyles="gap-0"
          />
        </div>

        <div className={styles.navbarMenu_body}>
          {links.map((link) => (
            <Button
              key={link.text}
              label={link.text}
              href={link.route}
              icon={link.icon}
              variant="link"
              size="lg"
              onClick={toggleMenu}
              buttonWrapperStyles={
                link.targetSegment === segment
                  ? "scale-110 text-callToAction"
                  : ""
              }
            />
          ))}
          <Button
            href="/sign-up"
            label="Sign Up"
            icon="user"
            size="sm"
            buttonWrapperStyles="px-[2rem]"
          />
        </div>
      </aside>
    </div>
  );
};

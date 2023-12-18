import { useEffect } from "react";
import { links } from "@/utils/constants/links-object-map";
import { Button } from "@/components/atoms/Button/Button";
import type { NavbarMenuProps } from "./NavbarMenu.props";
import { styles } from "./NavbarMenu.styles";

export const NavbarMenu = (props: NavbarMenuProps) => {
  const { isMenuOpen, toggleMenu } = props;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [isMenuOpen]);

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
          <Button
            label="close menu"
            icon="arrowLeft"
            variant="link"
            size="md"
            onClick={toggleMenu}
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

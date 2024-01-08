import { AnimatePresence, motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect } from "react";
import { item, list } from "@/utils/animations/variants";
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
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          key="modal"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.8, type: "spring" }}
          exit={{ x: "100%" }}
          className={styles.navbarMenu_overlay}
        >
          <aside className={`${styles.navbarMenu}`}>
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

            <motion.div
              className={styles.navbarMenu_body}
              initial="closed"
              animate="open"
              exit="closed"
              variants={list}
            >
              {links.map((link, index) => (
                <motion.div key={index} variants={item}>
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
                        : "text-[5rem]"
                    }
                  />
                </motion.div>
              ))}
            </motion.div>
          </aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

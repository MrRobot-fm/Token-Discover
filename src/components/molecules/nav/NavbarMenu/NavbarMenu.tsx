import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { links } from "@/utils/constants/links-object-map";
import { Button } from "@/components/atoms/Button/Button";
import type { NavbarMenuProps } from "./NavbarMenu.props";

export const NavbarMenu = (props: NavbarMenuProps) => {
  const { isOpen, onClose } = props;

  return (
    <Drawer
      placement="right"
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
    >
      <DrawerOverlay className="bg-background-black/50" />
      <DrawerContent className="bg-background-grey px-[3rem] py-[3.9rem] md:max-w-[50%]">
        <DrawerHeader className="text-callToAction">
          <Button
            label="close menu"
            icon="arrowLeft"
            variant="link"
            size="md"
            onClick={onClose}
          />
        </DrawerHeader>
        <DrawerBody className="flex h-[80%] flex-col items-start justify-between py-[5rem] text-callToAction">
          {links.map((link) => (
            <Button
              key={link.text}
              label={link.text}
              href={link.route}
              icon={link.icon}
              variant="link"
              size="lg"
              onClick={onClose}
            />
          ))}
          <Button
            href="/sign-up"
            label="Sign Up"
            icon="user"
            size="sm"
            buttonWrapperStyles="px-[2rem]"
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

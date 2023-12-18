import { Icon } from "@/components/atoms/Icon/Icon";

export const NavbarMenuButton = ({
  toggleMenu,
}: {
  toggleMenu: () => void;
}) => {
  return (
    <div className="flex cursor-pointer" onClick={toggleMenu}>
      <Icon name="list" className="h-[3.2rem] w-[3.2rem]" />
    </div>
  );
};

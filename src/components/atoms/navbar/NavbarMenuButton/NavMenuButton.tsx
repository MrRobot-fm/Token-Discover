import { Icon } from "@/components/atoms/Icon/Icon";

export const NavbarMenuButton = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <div className="flex cursor-pointer" onClick={onOpen}>
      <Icon name="list" className="h-[3.2rem] w-[3.2rem]" />
    </div>
  );
};

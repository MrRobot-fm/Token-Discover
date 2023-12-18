import { Icon } from "@/components/atoms/Icon/Icon";

export const NavLogo = () => {
  return (
    <div className="flex items-start justify-start gap-[1rem]">
      <Icon name="store" className="h-[3.2rem] w-[3.2rem] text-callToAction" />
      <span className="heading5 font-bold">Token Discover</span>
    </div>
  );
};

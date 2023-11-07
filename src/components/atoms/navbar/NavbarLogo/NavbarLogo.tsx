import { Icon } from "@/components/atoms/Icon/Icon";

export const NavLogo = () => {
  return (
    <div className="flex items-start justify-center gap-[1rem]">
      <Icon
        name="store"
        className="h-[2.4rem] w-[2.4rem] text-callToAction lg:h-[3.2rem] lg:w-[3.2rem]"
      />
      <span className="paragraph lg:heading5 font-semibold">NFT Discover</span>
    </div>
  );
};

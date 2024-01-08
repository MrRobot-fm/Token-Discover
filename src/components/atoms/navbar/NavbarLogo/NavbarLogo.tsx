import Link from "next/link";
import { Icon } from "@/components/atoms/Icon/Icon";

export const NavLogo = ({ text }: { text: string }) => {
  return (
    <Link href="/">
      <div className="flex items-start justify-start gap-[1rem]">
        <Icon
          name="siteLogo"
          className="h-[3.2rem] w-[3.2rem] text-callToAction"
        />
        <span className="heading5 font-bold text-white">{text}</span>
      </div>
    </Link>
  );
};

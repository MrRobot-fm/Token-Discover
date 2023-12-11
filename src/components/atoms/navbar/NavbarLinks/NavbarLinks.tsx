import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { PAGES_PATH } from "@/utils/constants/pages-path";
import type { IconName } from "@/types/icons";
import { Button } from "@/components/atoms/Button/Button";

export const NavbarLinks = ({
  links,
}: {
  links: {
    text: string;
    route: string;
    icon: IconName;
    targetSegment: string | null;
  }[];
}) => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex items-center justify-between gap-[3rem]">
      {links.map((link) => {
        const isActive = link.targetSegment === segment;

        return (
          <Link
            key={link?.text}
            href={link?.route}
            className={`paragraph font-semibold transition duration-500 hover:opacity-70 ${
              isActive && "scale-110 text-callToAction"
            }`}
          >
            {link?.text}
          </Link>
        );
      })}
      <Button
        href={PAGES_PATH.SIGN_UP}
        label="Sign Up"
        icon="user"
        buttonWrapperStyles="px-[3rem]"
        size="sm"
      />
    </div>
  );
};

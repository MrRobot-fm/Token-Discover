import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconName } from "@/types/icons";
import { Button } from "@/components/atoms/Button/Button";

export const NavbarLinks = ({
  links,
}: {
  links: { text: string; route: string; icon: IconName }[];
}) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between gap-[3rem]">
      {links.map((link) => (
        <Link
          key={link?.text}
          href={link?.route}
          className={`paragraph font-semibold transition duration-500 hover:opacity-70 ${
            pathname === link?.route && "scale-110 text-callToAction"
          }`}
        >
          {link?.text}
        </Link>
      ))}
      <Button
        url="/sing-up"
        label="Sign Up"
        icon="user"
        buttonWrapperStyles="px-[3rem]"
        size="sm"
      />
    </div>
  );
};

import Link from "next/link";
import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { RankingBadge } from "@/components/atoms/RankingBadge/RankingBadge";
import AvatarPlaceholder from "@/assets/placeholders/AvatarPlaceholder.svg";
import type { CreatorCardProps } from "./CreatorCard.props";

export const CreatorCard = (props: CreatorCardProps) => {
  const {
    avatarStyle,
    creatorName = "animakid",
    totalSales = 34.53,
    criptoCurrency,
    href = "/",
  } = props;
  return (
    <Link {...{ href }} className="group w-full">
      <div className="flex w-full items-center justify-center gap-[2rem] overflow-hidden rounded-[2rem] bg-background-grey p-[2rem] transition duration-500 group-hover:scale-105 md:relative md:flex-col">
        <div className="base:hidden md:flex">
          <RankingBadge ranking={1} />
        </div>
        <div className="base:relative">
          <Avatar
            src={AvatarPlaceholder}
            alt="artist-logo"
            {...(avatarStyle && { size: avatarStyle?.size })}
          />
          <div className="base:flex md:hidden">
            <RankingBadge ranking={1} />
          </div>
        </div>
        <div className="flex w-fit flex-col overflow-hidden base:items-start md:items-center">
          <h5 className="overflow-hidden text-ellipsis whitespace-nowrap base:w-full md:w-fit">
            {creatorName}
          </h5>
          <p className=" text-label-grey">
            Total Sales:
            <span className="paragraph whitespace-pre text-white">{` ${totalSales} ${criptoCurrency}`}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

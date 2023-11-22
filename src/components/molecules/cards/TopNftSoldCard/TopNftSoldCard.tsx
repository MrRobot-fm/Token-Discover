import Link from "next/link";
import { DEFAULT_IMG_URL_FALLBACK } from "@/utils/constants/global";
import { getFormattedCryptoCurrency } from "@/utils/functions/get-formatted-crypto-currency";
import { Avatar } from "@/components/atoms/Avatar/Avatar";
import type { TopNftSoldCardProps } from "./TopNftSoldCard.props";

export const TopNftSoldCard = (props: TopNftSoldCardProps) => {
  const {
    avatarStyle,
    nftName,
    price,
    criptoCurrency,
    href = "/",
    image,
  } = props;
  return (
    <Link {...{ href }} className="group w-full">
      <div className="flex w-full items-center justify-center gap-[2rem] overflow-hidden rounded-[2rem] bg-background-grey p-[2rem] transition duration-500 group-hover:scale-105 md:relative md:flex-col">
        <div>
          <Avatar
            src={image.src || DEFAULT_IMG_URL_FALLBACK}
            alt={image.alt || "nft-img"}
            {...(avatarStyle && { size: avatarStyle?.size })}
          />
        </div>
        <div className="flex w-fit flex-col gap-[0.5rem] overflow-hidden base:items-start md:items-center">
          <h5 className="overflow-hidden text-ellipsis whitespace-nowrap base:w-full md:w-fit">
            {nftName}
          </h5>
          <p className=" text-label-grey">
            Price:
            <span className="paragraph whitespace-pre text-white">
              {getFormattedCryptoCurrency({
                value: price,
                currency: criptoCurrency,
              })}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

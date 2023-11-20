import { DEFAULT_IMG_URL_FALLBACK } from "@/utils/constants/global";
import { CustomImage } from "../Image/CustomImage";
import type { AvatarProps } from "./Avatar.props";
import { avatar } from "./avatar.variants";

export const Avatar = (props: AvatarProps) => {
  const { size, src, alt = "avatar", className } = props;
  return (
    <div className={avatar({ size, className })}>
      <CustomImage src={src || DEFAULT_IMG_URL_FALLBACK} alt={alt} />
    </div>
  );
};

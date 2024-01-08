import { DEFAULT_IMG_URL_FALLBACK } from "@/utils/constants/global";
import { avatar } from "@/components/atoms/Avatar/avatar.variants";
import { CustomImage } from "../Image/CustomImage";
import type { AvatarProps } from "./Avatar.props";

export const Avatar = (props: AvatarProps) => {
  const { size, src, alt = "avatar", className, isLoading, ...rest } = props;
  return (
    <div className={avatar({ size, className })}>
      <CustomImage
        src={src || DEFAULT_IMG_URL_FALLBACK}
        alt={alt || "avatar-img"}
        isLoading={isLoading}
        {...rest}
      />
    </div>
  );
};

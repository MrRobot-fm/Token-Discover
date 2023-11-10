import AvatarPlaceholder from "@/assets/placeholders/AvatarPlaceholder.svg";
import { CustomImage } from "../Image/CustomImage";
import type { AvatarProps } from "./Avatar.props";
import { avatar } from "./avatar.variants";

export const Avatar = (props: AvatarProps) => {
  const { size, src, alt = "avatar", className } = props;
  return (
    <div className={avatar({ size, className })}>
      <CustomImage src={src || AvatarPlaceholder.src} alt={alt} />
    </div>
  );
};

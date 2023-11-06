import { CustomImage } from "../Image/CustomImage";
import type { AvatarProps } from "./Avatar.props";
import { avatar } from "./Avatar.variants";

export const Avatar = (props: AvatarProps) => {
  const { size, src, alt = "avatar", className } = props;
  return (
    <div className={avatar({ size, className })}>
      <CustomImage src={src || "/avatar-placeholder.svg"} alt={alt} />
    </div>
  );
};

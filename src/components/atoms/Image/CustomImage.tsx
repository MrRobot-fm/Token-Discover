import Image from "next/image";
import type { CustomImageProps } from "./CustomImage.props";
import { customImage } from "./customImage.variants";

export const CustomImage = (props: CustomImageProps) => {
  const {
    src = "/",
    alt = "image",
    fill = true,
    priority,
    quality,
    placeholder,
    blurDataURL,
    sizes = "75vw",
    size,
    className,
  } = props;

  return (
    <div className={customImage({ size, className })}>
      <Image
        fill={fill}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        alt={alt}
        src={src}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

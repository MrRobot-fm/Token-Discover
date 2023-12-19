import Image from "next/image";
import { Skeleton } from "@/components/molecules/Skeleton/Skeleton";
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
    isLoading = false,
  } = props;

  if (isLoading) {
    return (
      <div className={customImage({ size, className })}>
        <Skeleton variant="image" />
      </div>
    );
  }

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

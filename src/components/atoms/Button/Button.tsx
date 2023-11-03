import Link from "next/link";
import { checkIsExternal } from "@/utils/functions/is-external";
import { Icon } from "@/components/atoms/Icon/Icon";
import type { ButtonProps } from "./Button.props";
import { button } from "./button.variants";

export const Button = (props: ButtonProps) => {
  const { url, label, icon, size, variant } = props;
  const { buttonWrapper, buttonLabel, buttonIcon } = button({
    variant,
    size,
  });

  const isExternal = checkIsExternal(url);

  if (isExternal) {
    return (
      <a href={url} target="_blank" rel="noopener">
        <button className={buttonWrapper()}>
          {!!icon && <Icon name={icon} className={buttonIcon()} />}
          <span className={buttonLabel()}>{label}</span>
        </button>
      </a>
    );
  }
  if (!isExternal && url)
    return (
      <Link href={url}>
        <button className={buttonWrapper()}>
          {!!icon && <Icon name={icon} className={buttonIcon()} />}
          <span className={buttonLabel()}>{label}</span>
        </button>
      </Link>
    );

  return (
    <button className={buttonWrapper()}>
      {!!icon && <Icon name={icon} className={buttonIcon()} />}
      <span className={buttonLabel()}>{label}</span>
    </button>
  );
};

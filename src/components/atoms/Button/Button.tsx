import Link from "next/link";
import { checkIsExternal } from "@/utils/functions/is-external";
import { Icon } from "@/components/atoms/Icon/Icon";
import type { ButtonProps } from "./Button.props";
import { button } from "./button.variants";

export const Button = (props: ButtonProps) => {
  const {
    href,
    label,
    icon,
    size,
    iconSize,
    variant,
    buttonWrapperStyles,
    type = "button",
    ...rest
  } = props;
  const { buttonWrapper, buttonLabel } = button({
    variant,
    size,
  });

  const isExternal = checkIsExternal(href);
  const external = isExternal ? { target: "_blank", rel: "noopener" } : {};

  if (href) {
    return (
      <Link legacyBehavior passHref {...{ href }}>
        <a {...external}>
          <button
            className={buttonWrapper({
              className: buttonWrapperStyles,
            })}
            type={type}
            {...rest}
          >
            {!!icon && <Icon name={icon} size={iconSize} />}
            <span className={buttonLabel()}>{label}</span>
          </button>
        </a>
      </Link>
    );
  }

  return (
    <button
      className={buttonWrapper({ className: buttonWrapperStyles })}
      type={type}
      {...rest}
    >
      {!!icon && <Icon name={icon} size={iconSize} />}
      <span className={buttonLabel()}>{label}</span>
    </button>
  );
};

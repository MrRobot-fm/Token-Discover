import { Button } from "@/components/atoms/Button/Button";
import type { ButtonProps } from "@/components/atoms/Button/Button.props";

export const NavbarMenuButton = (props: ButtonProps) => {
  const { icon, variant, size, onClick, buttonWrapperStyles } = props;
  return <Button {...{ icon, variant, size, onClick, buttonWrapperStyles }} />;
};

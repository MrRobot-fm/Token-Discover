import { useMemo } from "react";
import type { IconName } from "@/types/icons";
import { Icon } from "@/components/atoms/Icon/Icon";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { styles } from "../input.styles";
import type { InputProps } from "./Input.props";

export const Input = (props: InputProps) => {
  const {
    type = "text",
    placeholder,
    inputWrapperProps,
    register,
    name,
    validationRules,
    ...rest
  } = props;
  const { error } = inputWrapperProps || {};

  const inputIcon: IconName = useMemo(() => {
    if (type === "text") return "user";
    if (type === "search") return "search";
    return "mailLetter";
  }, [type]);

  return (
    <InputWrapper {...{ error, name }}>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        {...(register &&
          name && {
            ...register(name, validationRules && validationRules),
          })}
        {...rest}
      />
      <Icon name={inputIcon} className={styles.input_icon} />
    </InputWrapper>
  );
};

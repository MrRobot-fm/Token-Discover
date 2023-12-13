"use client";

import { useMemo, useState } from "react";
import type { IconName } from "@/types/icons";
import { Button } from "@/components/atoms/Button/Button";
import { InputProps } from "@/components/atoms/Forms/Input/Input.props";
import { InputWrapper } from "@/components/atoms/Forms/InputWrapper/InputWrapper";
import { Icon } from "@/components/atoms/Icon/Icon";
import { styles } from "../input.styles";

export const InputPassword = (props: InputProps) => {
  const { placeholder, inputWrapperProps, register, name, validationRules } =
    props;
  const { error } = inputWrapperProps || {};

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const passwordIcon: IconName = useMemo(() => {
    return showPassword ? "eye" : "eyeSlash";
  }, [showPassword]);

  return (
    <InputWrapper {...{ error }}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className={styles.input}
        {...(register &&
          name && { ...register(name, validationRules && validationRules) })}
      />
      <Icon name="lockKey" className={styles.input_icon} />
      <Button
        type="button"
        icon={passwordIcon}
        className={styles.input_password_icon}
        onClick={togglePassword}
      />
    </InputWrapper>
  );
};

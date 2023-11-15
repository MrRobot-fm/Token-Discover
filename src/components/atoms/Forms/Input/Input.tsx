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
    label,
    validationRules,
  } = props;
  const { error } = inputWrapperProps || {};

  return (
    <InputWrapper {...{ error, name, label }}>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        {...register(name, validationRules && validationRules)}
      />
      <Icon
        name={type === "text" ? "user" : "mailLetter"}
        className={styles.input_icon}
      />
    </InputWrapper>
  );
};

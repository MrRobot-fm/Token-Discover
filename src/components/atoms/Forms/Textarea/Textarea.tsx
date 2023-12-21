import type { InputProps } from "@/components/atoms/Forms/Input/Input.props";
import { InputWrapper } from "@/components/atoms/Forms/InputWrapper/InputWrapper";
import { styles } from "../input.styles";

export const Textarea = (props: InputProps) => {
  const { placeholder, inputWrapperProps, register, name, validationRules } =
    props;

  const { error, inputWrapperStyles } = inputWrapperProps || {};

  return (
    <InputWrapper {...{ error, name, inputWrapperStyles }}>
      <textarea
        placeholder={placeholder}
        className={styles.input_textarea}
        {...(register &&
          name && {
            ...register(name, validationRules && validationRules),
          })}
      />
    </InputWrapper>
  );
};

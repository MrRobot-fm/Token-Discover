import { styles } from "../input.styles";
import { InputWrapperProps } from "./InputWrapper.props";

export const InputWrapper = (props: InputWrapperProps) => {
  const { children, error } = props;
  return (
    <div className={styles.input_wrapper}>
      {children}
      {error && (
        <span className={styles.input_wrapper__error_message}>
          {error?.message}
        </span>
      )}
    </div>
  );
};

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toastError, toastSuccess } from "@/utils/functions/toast";
import type { GetInTouchValues } from "@/components/organism/get-in-touch/GetInTouchForm/GetInTouchForm.props";

export const useGetInTouchForm = () => {
  const form = useRef<HTMLFormElement | string>("");

  const {
    handleSubmit,
    register,
    reset,

    formState: { errors },
  } = useForm<GetInTouchValues>({
    defaultValues: {
      user_name: "",
      user_email: "",
      user_message: "",
    },
  });

  const sendEmail: SubmitHandler<GetInTouchValues> = () => {
    emailjs
      .sendForm(
        "service_dvwh9g2",
        "template_q2knal8",
        form.current,
        "31NmIPC3WrRZQ4D4B"
      )
      .then(
        () => {
          toastSuccess({ message: "Email Sended" });
        },
        (error) => {
          if (error) {
            toastError({ message: error });
          }
        }
      );
    reset();
  };

  return {
    sendEmail,
    form,
    handleSubmit,
    register,
    errors,
  };
};

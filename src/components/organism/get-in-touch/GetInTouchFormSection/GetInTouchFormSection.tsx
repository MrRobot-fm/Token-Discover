"use client";

import { GetInTouchForm } from "@/components/organism/get-in-touch/GetInTouchForm/GetInTouchForm";
import { useGetInTouchForm } from "@/components/organism/get-in-touch/GetInTouchForm/use-get-in-touch-form";

const GetInTouchFormSection = () => {
  const { register, handleSubmit, errors, form, sendEmail } =
    useGetInTouchForm();
  return (
    <GetInTouchForm
      {...{
        register,
        handleSubmit,
        errors,
        form,
        sendEmail,
      }}
    />
  );
};

export default GetInTouchFormSection;

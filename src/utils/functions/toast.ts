import { toast } from "react-toastify";

export const toastSuccess = ({ message }: { message: string }) => {
  toast.success(message, {
    theme: "light",
  });
};

export const toastError = ({ message }: { message: string }) => {
  toast.success(message, {
    theme: "light",
  });
};

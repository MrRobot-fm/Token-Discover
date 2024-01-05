import dayjs from "dayjs";
import "dayjs/locale/it";

export const getFormattedDate = ({
  date,
  formatTemplate,
}: {
  date: string | Date | undefined;
  formatTemplate: string;
}) => {
  if (!date) return null;
  return dayjs(date).locale("it").format(formatTemplate);
};

import dayjs from "dayjs";

export const FooterLegalInfo = () => {
  const currentYear = dayjs(new Date()).format("YYYY");

  return (
    <div className="w-full border-t border-t-label-grey pt-[2rem]">
      <span className="text-label-grey">
        {`Ⓒ ${currentYear} Federico Migliore. All right reserved.`}
      </span>
    </div>
  );
};

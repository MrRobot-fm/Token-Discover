export const FooterLegalInfo = ({
  label,
  year,
}: {
  label: string;
  year: string;
}) => {
  return (
    <div className="w-full border-t border-t-label-grey pt-[2rem]">
      <span className="text-[1.3rem] text-label-grey md:text-[1.5rem]">{`Ⓒ${year} ${label}`}</span>
    </div>
  );
};

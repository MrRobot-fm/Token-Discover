export const FooterLegalInfo = ({
  label,
  year,
}: {
  label: string;
  year: string;
}) => {
  return (
    <div className="w-full border-t border-t-label-grey pt-[2rem]">
      <span className="text-label-grey">{`Ⓒ${year} ${label}`}</span>
    </div>
  );
};

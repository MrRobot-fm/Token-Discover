export const OnBoardingHeading = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </>
  );
};

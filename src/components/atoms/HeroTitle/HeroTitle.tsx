export const HeroTitle = ({
  title = "Discover digital art & Collect NFTs",
  subTitle = "Digital platform for crypto collectibles and non-fungible tokens, get started and discover your exclusive digital assets.",
}: {
  title?: string;
  subTitle?: string;
}) => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <h1 className="base:heading2 md:heading1 drop-shadow-alpha4">{title}</h1>
      <h3 className="heading5 font-normal lowercase drop-shadow-alpha4 first-letter:uppercase">
        {subTitle}
      </h3>
    </div>
  );
};

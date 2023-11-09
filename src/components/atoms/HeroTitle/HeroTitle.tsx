export const HeroTitle = ({
  title = "Discover digital art & Collect NFTs",
  subTitle = "NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.",
}: {
  title?: string;
  subTitle?: string;
}) => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <h1 className="base:heading2  md:heading1">{title}</h1>
      <h3 className="heading5 base:font-normal">{subTitle}</h3>
    </div>
  );
};

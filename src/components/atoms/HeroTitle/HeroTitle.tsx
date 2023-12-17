export const HeroTitle = ({
  title = "Discover digital art & Collect NFTs",
  subTitle = "NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.",
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

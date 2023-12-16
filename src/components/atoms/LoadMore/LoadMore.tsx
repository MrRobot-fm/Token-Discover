import { Button } from "@/components/atoms/Button/Button";

export const LoadMore = ({ loadMore }: { loadMore: () => void }) => {
  return (
    <div className="mx-auto flex base:w-full lg:max-w-[25rem] xl:max-w-[35rem]">
      <Button label="load more" onClick={loadMore} />
    </div>
  );
};

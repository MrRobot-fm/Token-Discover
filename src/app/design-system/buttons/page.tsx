import { Button } from "@/components/atoms/Button/Button";

export default function ButtonsPage() {
  return (
    <div className="flex h-screen items-center justify-center gap-[3rem] bg-background-black">
      <div className="flex flex-col gap-[3rem]">
        <Button label="primary" size="sm" icon="rocket" />
        <Button label="primary" size="md" icon="rocketLaunch" />
        <Button label="primary" size="lg" icon="list" />
      </div>
      <div className="flex flex-col gap-[3rem]">
        <Button
          label="secondary"
          size="sm"
          variant="secondary"
          icon="trendUp"
          url="/"
        />
        <Button
          label="secondary"
          size="md"
          variant="secondary"
          icon="eye"
          url="https://vocajs.pages.dev/"
        />
        <Button label="secondary" size="lg" variant="secondary" icon="store" />
      </div>
    </div>
  );
}

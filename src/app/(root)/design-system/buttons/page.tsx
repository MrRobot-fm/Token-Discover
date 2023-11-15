import { Button } from "@/components/atoms/Button/Button";

export default function ButtonsPage() {
  return (
    <div className="flex h-screen items-center justify-center gap-[5rem] bg-background-black">
      <div className="flex flex-col gap-[3rem]">
        <Button label="primary" size="sm" icon="rocket" />
        <Button label="primary" size="md" icon="rocketLaunch" />
        <Button label="primary" size="lg" icon="list" />
      </div>
      <div className="flex flex-col gap-[3rem]">
        <Button
          label="secondary"
          size="sm"
          variant="outline"
          icon="trendUp"
          url="/"
        />
        <Button
          label="secondary"
          size="md"
          variant="outline"
          icon="eye"
          url="https://vocajs.pages.dev/"
        />
        <Button label="secondary" size="lg" variant="outline" icon="store" />
      </div>

      <div className="flex flex-col gap-[3rem]">
        <Button
          label="secondary"
          size="sm"
          variant="link"
          icon="trendUp"
          url="/"
        />
        <Button
          label="secondary"
          size="md"
          variant="link"
          icon="eye"
          url="https://vocajs.pages.dev/"
        />
        <Button label="secondary" size="lg" variant="link" icon="store" />
      </div>
    </div>
  );
}

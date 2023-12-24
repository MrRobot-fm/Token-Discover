import { Button } from "@/components/atoms/Button/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[calc(100vh-8.6rem)] w-full place-items-center base:px-[3rem] md:px-[10rem] lg:px-[5rem]">
      <div className="flex w-fit flex-col items-center gap-[3.5rem]">
        <div className="text-center">
          <h3>Opsss! The page was not found ⛔</h3>
        </div>
        <div>
          <Button
            href="/"
            label="Go to home"
            size="sm"
            variant="outline"
            buttonWrapperStyles="px-[2.5rem]"
          />
        </div>
      </div>
    </section>
  );
}

import { Carousel } from "@/components/atoms/Carousel/Carousel";

export default function CarouselPage() {
  return (
    <div className="flex w-full items-center justify-center">
      <Carousel>
        {Array.from(
          Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="min-w-[40rem]">
              ciao
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
}

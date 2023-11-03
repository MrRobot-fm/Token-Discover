import { Button } from "@/components/atoms/Button/Button";
import RocketIcon from "@/assets/icons/RocketLaunch.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-start bg-background-black">
      <h1>ciao</h1>
      <Button
        label="button"
        url="/"
        icon={RocketIcon.src}
        size="lg"
        variant="primary"
      />
    </div>
  );
}

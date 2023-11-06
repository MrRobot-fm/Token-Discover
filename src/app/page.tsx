import { Button } from "@/components/atoms/Button/Button";
import { Icon } from "@/components/atoms/Icon/Icon";

export default function Home() {
  return (
    <div className="flex flex-col items-start bg-background-black">
      <h1>Token discover</h1>
      <Button
        label="button"
        url="/design-system/buttons"
        icon="rocketLaunch"
        size="lg"
        variant="primary"
      />
      <Icon name="swatches" size="xxl" />
    </div>
  );
}

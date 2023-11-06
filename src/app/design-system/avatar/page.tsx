import React from "react";
import { Avatar } from "@/components/atoms/Avatar/Avatar";

export default function AvatarPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-[3rem] bg-background-black">
      <Avatar src="/avatar-placeholder.svg" alt="avatar" size="sm" />
      <Avatar src="/avatar-placeholder.svg" alt="avatar" size="md" />
      <Avatar src="/avatar-placeholder.svg" alt="avatar" size="lg" />
    </div>
  );
}

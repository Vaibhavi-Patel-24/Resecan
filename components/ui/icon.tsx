import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

type IconName = keyof typeof Icons;

type IconProps = {
  name: IconName;
  className?: string;
} & LucideProps;

export function Icon({ name, className, ...props }: IconProps) {
  const IconComponent = Icons[name] as React.FC<LucideProps>;

  if (!IconComponent) return null;

  return (
    <IconComponent
      className={cn("w-4 h-4", className)}
      {...props}
    />
  );
}

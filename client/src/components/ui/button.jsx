import * as React from "react";
import { cn } from "@/lib/utils";

export function Button({ className, variant = "default", ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700",
        className
      )}
      {...props}
    />
  );
}

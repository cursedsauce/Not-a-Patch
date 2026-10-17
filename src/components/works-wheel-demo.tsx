"use client";

import { WorksWheel } from "@/components/ui/works-wheel";
import { toWheelItems, WORKS } from "@/lib/works";

export default function WorksWheelDemo() {
  return (
    <div className="bg-background text-foreground h-screen w-full">
      <WorksWheel
        items={toWheelItems(WORKS)}
        label="Not a Patch"
        action="View"
      />
    </div>
  );
}

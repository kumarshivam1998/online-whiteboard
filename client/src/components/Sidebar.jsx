import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Sidebar() {
  return (
    <Card className="w-64 h-full shadow-md rounded-none border-r">
      <CardHeader>
        <h2 className="text-lg font-semibold">Tools</h2>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">More tools coming soon…</p>
      </CardContent>
    </Card>
  );
}

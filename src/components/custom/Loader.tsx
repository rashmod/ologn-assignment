import {
  Antenna,
  Beaker,
  CloudRainWind,
  Compass,
  Droplets,
  Thermometer,
  Wind,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

export default function Loader() {
  return (
    <div className="w-[600px] space-y-2">
      <Skeleton className="h-7 w-2/3" />
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
          <div className="cursor-default space-y-1">
            <Skeleton className="h-6 w-52" />
            <Skeleton className="h-5 w-20" />
          </div>
          <div className="group col-span-2 flex cursor-default flex-col items-end gap-1 rounded-md transition">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-6 w-52" />
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-6 gap-2">
          <Skeleton className="col-span-2 h-16" />
          <Skeleton className="col-span-2 h-16" />
          <Skeleton className="col-span-2 h-16" />
          <Skeleton className="col-span-3 h-16" />
          <Skeleton className="col-span-3 h-16" />
          <Skeleton className="col-span-full h-16" />
        </CardContent>
      </Card>
    </div>
  );
}

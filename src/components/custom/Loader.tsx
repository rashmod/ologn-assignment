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
    <div className="space-y-2 sm:w-[600px]">
      <Skeleton className="h-5 w-2/3 sm:h-7" />
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 max-sm:p-4">
          <div className="cursor-default space-y-1">
            <Skeleton className="h-4 w-52 sm:h-6" />
            <Skeleton className="h-3 w-20 sm:h-5" />
          </div>
          <div className="group col-span-2 hidden cursor-default flex-col items-end gap-1 rounded-md transition sm:flex">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-6 w-52" />
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-6 gap-2 max-sm:p-4 max-sm:pt-0">
          <Skeleton className="col-span-3 h-16 sm:hidden" />
          <Skeleton className="col-span-3 h-16 sm:col-span-2" />
          <Skeleton className="col-span-3 h-16 sm:col-span-2" />
          <Skeleton className="col-span-3 h-16 sm:col-span-2" />
          <Skeleton className="col-span-3 h-16" />
          <Skeleton className="col-span-3 h-16" />
          <Skeleton className="col-span-full h-16" />
        </CardContent>
      </Card>
    </div>
  );
}

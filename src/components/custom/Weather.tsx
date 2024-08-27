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

import getWeather from "@/api/getWeather";
import getLocality, { Locality } from "@/utils/getLocality";

export default async function Weather({
  localityId,
  localityList,
}: {
  localityId: string;
  localityList: Locality[];
}) {
  const weather = await getWeather(localityId);
  const localityData = (() => {
    if (weather.success) return getLocality(localityId, localityList)!;
    else return null;
  })();

  if (weather.success)
    return (
      <div className="space-y-2">
        <div className="flex flex-wrap text-sm font-medium sm:text-lg">
          Reported as of
          <span className="ml-1 flex gap-1 font-normal text-muted-foreground">
            <span>{new Date().toLocaleTimeString("en-IN")}</span>
            <span>{new Date().toLocaleDateString("en-IN")}</span>
          </span>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 max-sm:p-4">
            <div className="cursor-default sm:space-y-1">
              <CardTitle className="max-sm:text-lg">
                {localityData?.localityName}
              </CardTitle>
              <CardDescription className="max-sm:text-xs">
                {localityData?.cityName}
              </CardDescription>
            </div>
            <div className="group col-span-2 hidden cursor-default items-center rounded-md transition sm:flex sm:gap-1">
              <Thermometer className="size-10 stroke-[1.5px] transition group-hover:stroke-blue-500 sm:size-12" />
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Temperature
                </p>
                <p className="text-base font-semibold leading-none sm:text-2xl">
                  {weather.data.temperature
                    ? weather.data.temperature.toFixed(1) + "°C"
                    : "No data"}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-6 gap-2 max-sm:p-4 max-sm:pt-0">
            <div className="group col-span-3 flex cursor-default flex-col gap-1.5 rounded-md border px-2 py-2 transition hover:bg-muted sm:col-span-2 sm:hidden">
              <Thermometer className="size-7 self-center transition group-hover:stroke-blue-500" />
              <div>
                <p className="text-xs text-muted-foreground">Temperature</p>
                <p className="text-lg font-medium leading-tight">
                  {weather.data.temperature
                    ? weather.data.temperature.toFixed(1) + "°C"
                    : "No data"}
                </p>
              </div>
            </div>
            <div className="group col-span-3 flex cursor-default flex-col gap-1.5 rounded-md border px-2 py-2 transition hover:bg-muted sm:col-span-2 sm:flex-row sm:items-center sm:gap-3 sm:px-4">
              <Droplets className="size-7 transition group-hover:stroke-blue-500 max-sm:self-center sm:size-8" />
              <div>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Humidity
                </p>
                <p className="text-lg font-medium leading-tight sm:text-xl">
                  {weather.data.humidity
                    ? weather.data.humidity.toFixed(0) + "%"
                    : "No data"}
                </p>
              </div>
            </div>
            <div className="group col-span-3 flex cursor-default flex-col gap-1.5 rounded-md border px-2 py-2 transition hover:bg-muted sm:col-span-2 sm:flex-row sm:items-center sm:gap-3 sm:px-4">
              <Wind className="size-7 transition group-hover:stroke-blue-500 max-sm:self-center sm:size-8" />
              <div>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Wind speed
                </p>
                <p className="text-lg font-medium leading-tight sm:text-xl">
                  {weather.data.wind_speed
                    ? weather.data.wind_speed.toFixed(1) + " m/s"
                    : "No data"}
                </p>
              </div>
            </div>

            <div className="group col-span-3 flex cursor-default flex-col gap-1.5 rounded-md border px-2 py-2 transition hover:bg-muted sm:col-span-2 sm:flex-row sm:items-center sm:gap-3 sm:px-4">
              <Compass className="size-7 transition group-hover:stroke-blue-500 max-sm:self-center sm:size-8" />
              <div>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Wind direction
                </p>
                <p className="text-lg font-medium leading-tight sm:text-xl">
                  {weather.data.wind_direction
                    ? weather.data.wind_direction + "°"
                    : "No data"}
                </p>
              </div>
            </div>

            <div className="group col-span-3 flex cursor-default flex-col gap-1.5 rounded-md border px-2 py-2 transition hover:bg-muted sm:flex-row sm:items-center sm:gap-3 sm:px-4">
              <CloudRainWind className="size-7 transition group-hover:stroke-blue-500 max-sm:self-center sm:size-8" />
              <div>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Rain intensity
                </p>
                <p className="text-lg font-medium leading-tight sm:text-xl">
                  {weather.data.rain_intensity
                    ? weather.data.rain_intensity.toFixed(1) + " mm/min"
                    : "No data"}
                </p>
              </div>
            </div>

            <div className="group col-span-3 flex cursor-default flex-col gap-1.5 rounded-md border px-2 py-2 transition hover:bg-muted sm:flex-row sm:items-center sm:gap-3 sm:px-4">
              <Beaker className="size-7 transition group-hover:stroke-blue-500 max-sm:self-center sm:size-8" />
              <div>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Rain accumulation
                </p>
                <p className="text-lg font-medium leading-tight sm:text-xl">
                  {weather.data.rain_accumulation
                    ? weather.data.rain_accumulation.toFixed(1) + " mm"
                    : "No data"}
                </p>
              </div>
            </div>
            <div className="group col-span-full flex cursor-default flex-col gap-1.5 rounded-md border px-2 py-2 transition hover:bg-muted sm:flex-row sm:items-center sm:gap-3 sm:px-4">
              <Antenna className="size-7 transition group-hover:stroke-blue-500 max-sm:self-center sm:size-8" />
              <div>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Data collected using:
                </p>
                <p className="text-lg font-medium leading-tight sm:text-xl">
                  {weather.data.device_type}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );

  return <div>Failed to fetch weather data</div>;
}

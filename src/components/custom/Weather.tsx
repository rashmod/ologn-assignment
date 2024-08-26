import {
  Antenna,
  Beaker,
  CloudRainWind,
  Compass,
  Droplets,
  Thermometer,
  Waves,
  Wind,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import deviceTypes from "@/data/device_type.json";
import locality from "@/data/locality.json";

function getLocality(localityId: string) {
  return locality.find((item) => item.localityId === localityId);
}

async function getWeather(
  localityId: string,
): Promise<SuccessResponse | ErrorResponse> {
  const response = await fetch(
    "https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=" +
      localityId,
    {
      headers: {
        "X-Zomato-Api-Key": process.env.WEATHER_UNION_API_KEY!,
      },
    },
  );

  if (!response.ok) {
    if (response.status === 400) {
      return { success: false, status: 400, message: "Invalid locality" };
    } else if (response.status === 500) {
      return { success: false, status: 500, message: "Internal server error" };
    } else {
      return {
        success: false,
        status: response.status,
        message: "Unknown error",
      };
    }
  }

  const json = await response.json();

  const data = {
    ...json.locality_weather_data,
    device_type: deviceTypes.find(
      (item) => item.device_type === json.device_type,
    )?.device_type_name,
  };

  return {
    data,
    status: 200,
    success: true,
    message: "Successfully fetch weather data",
  };
}

export default async function Weather({ localityId }: { localityId: string }) {
  const weather = await getWeather(localityId);
  const localityData = (() => {
    if (weather.success) return getLocality(localityId)!;
    else return null;
  })();

  console.log({ weather, localityData });

  if (weather.success)
    return (
      <div className="space-y-2">
        <div className="text-lg font-medium">
          Reported as of {new Date().toLocaleTimeString("en-IN")}{" "}
          {new Date().toLocaleDateString("en-IN")}
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
            <div className="cursor-default space-y-1">
              <CardTitle>{localityData?.localityName}</CardTitle>
              <CardDescription className="">
                {localityData?.cityName}
              </CardDescription>
            </div>
            <div className="group col-span-2 flex cursor-default items-center gap-1 rounded-md transition">
              <Thermometer
                size={48}
                className="stroke-[1.5px] transition group-hover:stroke-blue-500"
              />
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Temperature</p>
                <p className="text-2xl font-semibold leading-none">
                  {weather.data.temperature
                    ? weather.data.temperature.toFixed(1) + "°C"
                    : "No data"}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-6 gap-2">
            <div className="group col-span-2 flex cursor-default items-center gap-3 rounded-md border px-4 py-2 transition hover:bg-muted">
              <Droplets
                size={32}
                className="transition group-hover:stroke-blue-500"
              />
              <div>
                <p className="text-sm text-muted-foreground">Humidity</p>
                <p className="text-xl font-medium">
                  {weather.data.humidity
                    ? weather.data.humidity.toFixed(0) + "%"
                    : "No data"}
                </p>
              </div>
            </div>
            <div className="group col-span-2 flex cursor-default items-center gap-3 rounded-md border px-4 py-2 transition hover:bg-muted">
              <Wind
                size={32}
                className="transition group-hover:stroke-blue-500"
              />
              <div>
                <p className="text-sm text-muted-foreground">Wind speed</p>
                <p className="text-xl font-medium">
                  {weather.data.wind_speed
                    ? weather.data.wind_speed.toFixed(1) + " m/s"
                    : "No data"}
                  {}
                </p>
              </div>
            </div>
            <div className="group col-span-2 flex cursor-default items-center gap-3 rounded-md border px-4 py-2 transition hover:bg-muted">
              <Compass
                size={32}
                className="transition group-hover:stroke-blue-500"
              />
              <div>
                <p className="text-sm text-muted-foreground">Wind direction</p>
                <p className="text-xl font-medium">
                  {weather.data.wind_direction
                    ? weather.data.wind_direction + "°"
                    : "No data"}
                </p>
              </div>
            </div>
            <div className="group col-span-3 flex cursor-default items-center gap-3 rounded-md border px-4 py-2 transition hover:bg-muted">
              <CloudRainWind
                size={32}
                className="transition group-hover:stroke-blue-500"
              />
              <div>
                <p className="text-sm text-muted-foreground">Rain intensity</p>
                <p className="text-xl font-medium">
                  {weather.data.rain_intensity
                    ? weather.data.rain_intensity.toFixed(1) + " mm/min"
                    : "No data"}
                </p>
              </div>
            </div>
            <div className="group col-span-3 flex cursor-default items-center gap-3 rounded-md border px-4 py-2 transition hover:bg-muted">
              <Beaker
                size={32}
                className="transition group-hover:stroke-blue-500"
              />
              <div>
                <p className="text-sm text-muted-foreground">
                  Rain accumulation
                </p>
                <p className="text-xl font-medium">
                  {weather.data.rain_accumulation
                    ? weather.data.rain_accumulation.toFixed(1) + " mm"
                    : "No data"}
                </p>
              </div>
            </div>
            <div className="group col-span-full flex cursor-default items-center gap-3 rounded-md border px-4 py-2 transition hover:bg-muted">
              <Antenna
                size={32}
                className="transition group-hover:stroke-blue-500"
              />
              <div>
                <p className="text-sm text-muted-foreground">
                  Data collected using:
                </p>
                <p className="text-xl text-accent-foreground">
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

export type ErrorResponse = {
  success: false;
  status: 400 | 500 | number;
  message: string;
};

export type SuccessResponse = {
  success: true;
  status: 200;
  message: string;
  data: {
    device_type: number;
  } & LocalityWeatherData;
};

export type LocalityWeatherData = {
  temperature: number | null;
  humidity: number | null;
  wind_speed: number | null;
  wind_direction: number | null;
  rain_intensity: number | null;
  rain_accumulation: number | null;
};

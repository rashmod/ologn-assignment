import deviceTypes from "@/data/device_type.json";

export default async function getWeather(
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

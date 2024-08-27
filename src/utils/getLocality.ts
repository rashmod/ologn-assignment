export default function getLocality(
  localityId: string,
  localityList: Locality[],
) {
  return localityList.find((item) => item.localityId === localityId);
}

export type Locality = {
  cityName: string;
  localityName: string;
  localityId: string;
  latitude: number;
  longitude: number;
  device_type: string;
};

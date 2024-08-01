import { Location } from "@/types";
import { latLng, latLngBounds } from "leaflet";

export function calculateCenter(locations: Location[]) {
  const latLngs = locations.map((location) => {
    return latLng(...location.latLng);
  });
  const bounds = latLngBounds(latLngs);
  return bounds.getCenter();
}

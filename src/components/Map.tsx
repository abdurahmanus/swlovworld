"use client";
import { useEffect, useRef } from "react";
import type { Map as LMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Location } from "@/types";

export function Map({ locations }: { locations: Location[] }) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<LMap | null>(null);

  useEffect(() => {
    (async () => {
      const [L, geoUtils] = await Promise.all([
        import("leaflet"),
        import("@/utils/geo"),
      ]);

      if (map.current) return;

      map.current = L.map(mapContainer.current!).setView(
        geoUtils.calculateCenter(locations),
        8
      );
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map.current);

      locations.forEach((location) => {
        L.marker(location.latLng).addTo(map.current!).bindPopup(location.name);
      });
    })();
  }, [locations]);

  return (
    <div ref={mapContainer} style={{ position: "absolute", inset: 0 }}></div>
  );
}

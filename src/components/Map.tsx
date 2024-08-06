"use client";
import { useEffect, useRef } from "react";
import type { LatLngExpression, Map as LMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import type { MapLocation } from "@/types";
import styles from "./styles.module.css";

export function Map({ locations }: { locations: MapLocation[] }) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<LMap | null>(null);

  useEffect(() => {
    (async () => {
      const [L, geoUtils] = await Promise.all([
        import("leaflet"),
        import("@/utils/geo"),
      ]);

      if (map.current) return;

      const center: LatLngExpression = locations.length
        ? geoUtils.calculateCenter(locations)
        : [48.148598, 17.107748];

      map.current = L.map(mapContainer.current!).setView(center, 8);
      L.tileLayer(process.env.NEXT_PUBLIC_TILES_URL!, {
        maxZoom: 19,
        attribution: "©OpenStreetMap, ©CartoDB",
      }).addTo(map.current);

      locations.forEach((location) => {
        const icon = L.icon({
          iconUrl: location.mapImg,
          iconSize: [64, 64],
          className: styles.icon,
        });
        L.marker(location.latLng, {
          icon,
        })
          .addTo(map.current!)
          .bindPopup(
            `
          <article class="flex flex-col gap-2">
            <p class="text-lg !m-0">${location.name}</p>
            <a href="${location.linkToArticle}" target="blank" class="w-64 hover:scale-105 transition-transform">
              <img width="600" height="400" src="${location.mapImg}"/>
            </a>
            <a href="${location.linkToGoogleMaps}" target="blank">${location.linkToGoogleMaps}</a>
          </article>
          `
          );
      });
    })();
  }, [locations]);

  return (
    <div ref={mapContainer} style={{ position: "absolute", inset: 0 }}></div>
  );
}

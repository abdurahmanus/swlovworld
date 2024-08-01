import { Map } from "@/components/Map";
import { Location } from "@/types";

// TODO: fetch locations
const locations: Location[] = [
  {
    name: "Bratislava",
    latLng: [48.148598, 17.107748],
  },
  {
    name: "Vienna",
    latLng: [48.210033, 16.363449],
  },
  {
    name: "Erlaufsee",
    latLng: [47.791809, 15.273135],
  },
  {
    name: "Reichenau an der Rax",
    latLng: [47.70083647433513, 15.736064860442031],
  },
];

export default function Home() {
  return (
    <main className="">
      <Map locations={locations} />
    </main>
  );
}

import { Map } from "@/components/Map";
import { Location } from "@/types";

const getLocations = async () => {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/locations`);
  const locations: Location[] = await res.json();
  return locations;
};

export default async function Home() {
  const locations = await getLocations();
  return (
    <main>
      <Map locations={locations} />
    </main>
  );
}

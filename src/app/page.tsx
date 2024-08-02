import { Map } from "@/components/Map";
import { Location } from "@/types";

const getLocations = async (): Promise<Location[]> => {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const url = `${baseUrl}/api/locations`;
  // const res = await fetch(url);
  // const locations: Location[] = await res.json();
  // return locations;
  return [];
};

export default async function Home() {
  const locations = await getLocations();
  return (
    <main>
      <Map locations={locations} />
    </main>
  );
}

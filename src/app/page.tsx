import { Map } from "@/components/Map";
import { locations } from "@/content/locations";

export default async function Home() {
  return (
    <main>
      <Map locations={locations} />
    </main>
  );
}

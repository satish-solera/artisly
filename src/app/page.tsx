'use client'
import ArtistInfo from "@/components/sections/artistInfoSection";

import Hero from "@/components/sections/heroSection";
import { ArtistCard } from "@/components/ui/cards/artistCard";


import { useEffect, useState } from "react";
type Artist = {
  id: number;
  name: string;
  category: string;
  location: string
  image: string;
};

export default function Home() {
  const [artist, setArtists] = useState<Artist[]>([])
  useEffect(() => {
    fetch("/data/artist.json")
      .then((res) => res.json())
      .then(setArtists);
  }, []);
  return (
    <>
      <Hero />
      <ArtistInfo />


      <div className="grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 gap-6 my-4">

        {artist.map((data) => (
          <ArtistCard
            key={data.id}
            name={data.name}
            category={data.category}
            location={data.location}
            image={data.image}
          />
        ))}
      </div>



    </>
  );
}

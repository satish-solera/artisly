// components/ArtistsSection.tsx
"use client";



import { FilterBlock } from "../ui/cards/filterBlock";
import { ArtistCard } from "../ui/cards/artistCard";
import { useState , useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
type Artist = {
  id: number;
  name: string;
  category: string;
  price: string;
  location: string;
  image: string;
};
// const artists: Artist[] = [
//   {
//     id: 1,
//     name: "Ariana Vox",
//     category: "Singer",
//     image: "/artists/vox.jpg",
//   },
//   {
//     id: 2,
//     name: "Leo Moves",
//     category: "Dancer",
//     image: "/artists/leo.jpg",
//   },
//   {
//     id: 3,
//     name: "DJ Pulse",
//     category: "DJ",
//     image: "/artists/dj-pulse.jpg",
//   },
//   {
//     id: 4,
//     name: "Dr. Speakwell",
//     category: "Speaker",
//     image: "/artists/public-speaker.jpg",
//   },
// ];

export default function ArtistsSection() {
     const [artists, setArtists] = useState<Artist[]>([]);
  const [filters, setFilters] = useState({ category: "", location: "", price: "" });
    useEffect(() => {
    fetch("/data/artist.json")
      .then((res) => res.json())
      .then(setArtists);
  }, []);

    const filtered = artists.filter((artist) => {
    return (
      (!filters.category || artist.category === filters.category) &&
      (!filters.location || artist.location === filters.location) &&
      (!filters.price || artist.price === filters.price)
    );
  });

  return (
 

     <section className="px-6 md:px-20 py-16 bg-zinc-950 text-white">
      <h2 className="text-3xl font-bold mb-6 text-pink-500 text-center">Book an Artist</h2>

     <div className="my-32">
       <FilterBlock
        category={filters.category}
        location={filters.location}
        price={filters.price}
        onChange={setFilters}
      />

     </div>
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-32">
        <AnimatePresence>
          {filtered.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-zinc-500 mt-10">No artists match your filter.</p>
      )}
    </section>
  );
}

// components/Hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const categories = ["Dancer", "Singer", "DJ", "Speaker", "Painter", "Photographer"];

export default function ArtistInfo() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-6 md:px-16 py-20 text-white flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Discover & Book Your <span className="text-pink-500">Perfect Artist</span>
        </motion.h1>

        <p className="text-lg md:text-xl text-zinc-300">
          Choose from talented dancers, singers, DJs, speakers, and more for your next event or project.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selected === cat ? "default" : "outline"}
              className={`border-zinc-600 text-white hover:border-pink-500 ${
                selected === cat ? "bg-pink-600 hover:bg-pink-700" : ""
              }`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="mt-10">
          <Link href='/artist'>
          
          <Button className="bg-pink-600 hover:bg-pink-700 px-8 py-3 text-lg transition">
            Book Now
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

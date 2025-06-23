
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Artisly <span className="text-pink-500">Platform</span>, a Digital Platform
        </motion.h1>
        <p className="text-zinc-300 text-lg md:text-xl">
          I create expressive visuals that blend emotion, tech, and color. Explore world of digital artist.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <Link href='/artist'>
          
          <Button className="bg-pink-600 hover:bg-pink-700 transition">Exprole Artists</Button>
          </Link>
          
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
      >
        <Image
          src="/artists/artist-group.png"
          alt="artist-group"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
        />
      </motion.div>
    </section>
  );
}

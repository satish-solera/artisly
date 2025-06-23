"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="min-h-screen px-4 py-16 bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Illustration / Hero */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <Image
            src="/performing-artist.jpg" 
            alt="Performing-Artist"
            width={600}
            height={400}
            className="rounded-xl object-cover shadow-xl"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-4xl font-bold text-white leading-tight">
            About <span className="text-pink-500">Our Artist Platform</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            We’re building a powerful platform to help <strong>artists</strong> — singers, dancers,
            DJs, and speakers — showcase their talent, connect with event organizers, and grow their
            personal brand.
          </p>

          <ul className="space-y-2 text-zinc-300">
            <li> Easy onboarding with detailed profiles</li>
            <li> Smart filters by category, location, and price</li>
            <li> Free profile hosting with media uploads</li>
            <li> Quote requests with zero commission</li>
          </ul>

          <div className="pt-4">
            <Link href='/on-boarding-form'>
            <Button className="bg-pink-600 hover:bg-pink-700">
              Start Onboarding
            </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
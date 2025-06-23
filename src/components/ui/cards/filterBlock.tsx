"use client";

import { motion } from "framer-motion";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type FilterProps = {
  category: string;
  location: string;
  price: string;
  onChange: (filters: {
    category: string;
    location: string;
    price: string;
  }) => void;
};

export const FilterBlock = ({
  category,
  location,
  price,
  onChange,
}: FilterProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8 mb-14 grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4 w-full"
    >
      {/* Category Filter */}
      <Select
        value={category}
        onValueChange={(value: string) =>
          onChange({ category: value === "all" ? "" : value, location, price })
        }
      >
        <SelectTrigger className="bg-white text-black border border-zinc-700 hover:border-pink-500 focus:ring-pink-500 rounded">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent className="z-50 border-zinc-600 bg-white text-black py-2 shadow-lg rounded-md">
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="Singer">Singer</SelectItem>
          <SelectItem value="Dancer">Dancer</SelectItem>
          <SelectItem value="DJ">DJ</SelectItem>
          <SelectItem value="Speaker">Speaker</SelectItem>
        </SelectContent>
      </Select>

      {/* Location Filter */}
      <Select
        value={location}
        onValueChange={(value: string) =>
          onChange({ category, location: value === "all" ? "" : value, price })
        }
      >
        <SelectTrigger className="bg-white text-black border border-zinc-700 hover:border-pink-500 focus:ring-pink-500 rounded">
          <SelectValue placeholder="All Locations" />
        </SelectTrigger>
        <SelectContent className="z-50 bg-zinc-800 border-zinc-600 text-white py-2 shadow-lg rounded-md">
          <SelectItem value="all">All Locations</SelectItem>
          <SelectItem value="New York">New York</SelectItem>
          <SelectItem value="Los Angeles">Los Angeles</SelectItem>
          <SelectItem value="Chicago">Chicago</SelectItem>
          <SelectItem value="San Francisco">San Francisco</SelectItem>
        </SelectContent>
      </Select>

      {/* Price Filter */}
      <Select
        value={price}
        onValueChange={(value: string) =>
          onChange({ category, location, price: value === "all" ? "" : value })
        }
      >
        <SelectTrigger className="bg-white text-black border border-zinc-700 hover:border-pink-500 focus:ring-pink-500 rounded">
          <SelectValue placeholder="All Price Ranges" />
        </SelectTrigger>
        <SelectContent className="z-50 bg-zinc-800 border-zinc-600 text-white py-2 shadow-lg rounded-md">
          <SelectItem value="all">All Price Ranges</SelectItem>
          <SelectItem value="$300 - $800">$300 - $800</SelectItem>
          <SelectItem value="$500 - $1000">$500 - $1000</SelectItem>
          <SelectItem value="$600 - $1100">$600 - $1100</SelectItem>
          <SelectItem value="$700 - $1200">$700 - $1200</SelectItem>
        </SelectContent>
      </Select>
    </motion.div>
  );
};

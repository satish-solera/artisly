"use client";

import React, { useState } from "react";
import { TableColumn , Table} from "@/components/table/table"; // Adjust import path as needed

type Artist = {
  id: number;
  name: string;
  category: string[];
  city: string;
  fee: string;
};

const mockArtists: Artist[] = [
  { id: 1, name: "Arjun Singh", category: ["Singer", "DJ"], city: "Mumbai", fee: "$800" },
  { id: 2, name: "Priya Sharma", category: ["Dancer"], city: "Delhi", fee: "$500" },
  { id: 3, name: "Carlos Ruiz", category: ["Speaker"], city: "Madrid", fee: "$1200" },
];

export default function ManagerDashboard() {
  const [artists, setArtists] = useState<Artist[]>(mockArtists);

  const handleRemove = (id: number) => {
    setArtists((prev) => prev.filter((artist) => artist.id !== id));
  };

 const columns: TableColumn<Artist>[] = [
  { header: "Name", accessor: (row) => row.name },
  { header: "Category", accessor: (row) => row.category.join(", ") },
  { header: "City", accessor: (row) => row.city },
  { header: "Fee", accessor: (row) => row.fee },
  {
    header: "Action",
    accessor: (row) => (
      <button
        onClick={() => handleRemove(row.id)}
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded transition"
      >
        Remove
      </button>
    ),
  },
];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-8">
      <h1 className="text-2xl font-bold mb-6 text-zinc-800"> Manager Dashboard</h1>
      <Table columns={columns} data={artists} emptyMessage="No submissions yet." />
    </div>
  );
}

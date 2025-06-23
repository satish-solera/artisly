// components/Table.tsx
import React from "react";

export type TableColumn<T> = {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
};

type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  emptyMessage?: string;
};

export function Table<T extends { id: number | string }>({
  columns,
  data,
  emptyMessage = "No data available.",
}: TableProps<T>) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-zinc-100 text-zinc-700">
          {columns.map((col, i) => (
            <th key={i} className="py-2 px-3 text-left">{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="py-6 text-center text-zinc-400">
              {emptyMessage}
            </td>
          </tr>
        ) : (
          data.map((row) => (
            <tr key={row.id} className="border-b hover:bg-zinc-50 transition">
              {columns.map((col, i) => (
                <td key={i} className="py-2 px-3">
                  {typeof col.accessor === "function"
                    ? col.accessor(row)
                    : (row[col.accessor] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

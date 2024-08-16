"use client"

import { IconFlagSearch } from "@tabler/icons-react";
import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="flex justify-center mb-4">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search..."
          className="w-full dark:bg-slate-900 pl-10 pr-4 py-2 text-gray-900 dark:text-gray-50 bg-white border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <IconFlagSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
}

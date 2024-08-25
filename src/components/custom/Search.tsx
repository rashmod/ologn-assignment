"use client";

import { useState } from "react";

import SearchResults from "@/components/custom/SearchResults";
import { Command, CommandInput, CommandList } from "@/components/ui/command";

export default function Search() {
  const [input, setInput] = useState("");

  return (
    <Command className="h-11 overflow-visible rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput
        placeholder="Type a command or search..."
        value={input}
        onValueChange={setInput}
      />
      <div className="relative animate-in fade-in-0 zoom-in-95">
        <CommandList className="max-h-[200px]">
          <div className="absolute top-1.5 z-50 w-full">
            {input.trim().length === 0 ? null : <SearchResults />}
          </div>
        </CommandList>
      </div>
    </Command>
  );
}

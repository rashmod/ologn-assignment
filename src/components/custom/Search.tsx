"use client";

import { useState } from "react";

import SearchResults from "@/components/custom/SearchResults";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";

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
          {input.trim().length !== 0 && (
            <div className="absolute top-1.5 z-50 w-full">
              <CommandEmpty className="min-w-[8rem] rounded-md border bg-background p-1 shadow-md">
                <div className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none">
                  No results found.
                </div>
              </CommandEmpty>
              <SearchResults />
            </div>
          )}
        </CommandList>
      </div>
    </Command>
  );
}

"use client";

import {
  CommandEmpty,
  CommandItem,
  CommandGroup,
} from "@/components/ui/command";
import data from "@/data.json";

export default function SearchResults() {
  return (
    <CommandGroup className="relative z-50 h-[200px] min-w-[8rem] overflow-hidden rounded-md border bg-background shadow-md">
      {data.length === 0 ? (
        <CommandEmpty>No results found.</CommandEmpty>
      ) : (
        data.map((result, i) => (
          <CommandItem key={i}>
            {result.localityName}, {result.cityName}
          </CommandItem>
        ))
      )}
    </CommandGroup>
  );
}

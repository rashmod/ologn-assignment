"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import data from "@/data/locality.json";

export default function Search() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSelect(id: string) {
    setInput("");
    const params = new URLSearchParams();
    params.set("locality", id);
    router.push("/location?" + params.toString());
  }

  return (
    <Command className="h-11 overflow-visible rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput
        placeholder="Search for a location..."
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
              <CommandGroup className="relative z-50 h-[200px] min-w-[8rem] overflow-hidden rounded-md border bg-background shadow-md">
                {data.map((result, i) => (
                  <CommandItem
                    key={i}
                    onSelect={() => handleSelect(result.localityId)}
                  >
                    {result.localityName}, {result.cityName}
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          )}
        </CommandList>
      </div>
    </Command>
  );
}

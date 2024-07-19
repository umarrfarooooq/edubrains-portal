import React from "react";
import SearchIcon from "@/components/icons/SearchIcon";
const Search = () => {
  return (
    <span class="search-box-destination w-full hidden md:w-auto md:flex items-center md:mt-0 lg:mt-0 py-3 px-4 rounded-[0.5rem] bg-[#F4F1EB]">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        class="flex-1 border-none outline-none bg-transparent md:w-full"
      />
    </span>
  );
};

export default Search;

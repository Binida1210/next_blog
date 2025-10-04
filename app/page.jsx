"use client";
import BlogList from "@/components/BlogList";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";
import React, { useState } from "react";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <main>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <BlogList searchTerm={searchTerm} />
    </main>
  );
};

export default HomePage;

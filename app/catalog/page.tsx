"use client";

import { useEffect } from "react";
import { useCarsStore } from "@/lib/store/carsStore";
import Search from "@/components/Search/Search";
import CarCard from "@/components/CarCard/CarCard";

export default function Catalog() {
  const { cars, fetchCars, loadMore, loading, page, totalPages } =
    useCarsStore();

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <main>
      <Search />

      <ul>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>

      {page < totalPages && !loading && (
        <button onClick={loadMore}>Load more</button>
      )}
    </main>
  );
}

"use client";

import { useEffect } from "react";
import { useCarsStore } from "@/lib/store/carsStore";
import Search from "@/components/Search/Search";
import CarCard from "@/components/CarCard/CarCard";
import css from "./catalog.module.css"

export default function Catalog() {
  const { cars, fetchCars, loadMore, loading, page, totalPages } =
    useCarsStore();

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <main>
      <Search />

      <ul className={css.catalog}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>

      {page < totalPages && !loading && (
        <button className={css.loadMorBtn} onClick={loadMore}>Load more</button>
      )}
    </main>
  );
}

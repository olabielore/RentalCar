import { create } from "zustand";
import { Car } from "@/lib/types/car";

interface FavoritesStore {
  favorites: Car[];
  toggleFavorite: (car: Car) => void;
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites") || "[]")
      : [],

  toggleFavorite: (car) =>
    set((state) => {
      const exists = state.favorites.find((c) => c.id === car.id);
      const updated = exists
        ? state.favorites.filter((c) => c.id !== car.id)
        : [...state.favorites, car];

      localStorage.setItem("favorites", JSON.stringify(updated));
      return { favorites: updated };
    }),
}));

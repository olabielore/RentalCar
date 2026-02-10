import { create } from "zustand";
import { getCars } from "@/lib/api";
import { Car, Search } from "@/lib/types/car";

interface CarsStore {
  cars: Car[];
  page: number;
  totalPages: number;
  loading: boolean;
  search: Search;

  fetchCars: () => Promise<void>;
  loadMore: () => Promise<void>;
  setSearch: (search: Search) => void;
  resetCars: () => void;
}

export const useCarsStore = create<CarsStore>((set, get) => ({
  cars: [],
  page: 1,
  totalPages: 1,
  loading: false,
  search: {},

  fetchCars: async () => {
    const { page, search, cars } = get();
    set({ loading: true });

    const params = {
        page,
        limit: 12,
        brand: search.brand || undefined,
        rentalPrice: search.rentalPrice || undefined,
        minMileage: search.minMileage
          ? Number(search.minMileage)
          : undefined,
        maxMileage: search.maxMileage
          ? Number(search.maxMileage)
          : undefined,
      };
    
      const data = await getCars(params);

    set({
      cars: [...cars, ...data.cars],
      totalPages: data.totalPages,
      loading: false,
    });
  },

  loadMore: async () => {
    const { page, totalPages } = get();
    if (page >= totalPages) return;

    set({ page: page + 1 });
    await get().fetchCars();
  },

  setSearch: (search) => {
    set({ search });
    get().resetCars();
    get().fetchCars();
  },

  resetCars: () => set({ cars: [], page: 1, totalPages: 1 }),
}));

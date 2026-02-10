import axios from 'axios';
import { Car } from '@/lib/types/car';

export const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
  // withCredentials: true,
});

export type FetchCarParams = {
  page?: number;
  limit?: number;
  brand?: string;
  rentalPrice?: string;
  minMileage?: number;
  maxMileage?: number;
};


export type CarsResponse = {
    cars: Car[];
    totalCars: number,
    page: number,
    totalPages: number,
}

export const getCars = async (
    params: FetchCarParams
  ): Promise<CarsResponse> => {
    const { data } = await api.get<CarsResponse>('/cars', { params });
    return data;
  };
  
  export const getCarById = async (id: string): Promise<Car | undefined> => {
    const { data } = await api.get<CarsResponse>('/cars');
  
    return data.cars.find(car => car.id === id);
  };

  

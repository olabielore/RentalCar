
"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from 'next/navigation';
import { getCarById } from "@/lib/api";
import css from "./BookingForm.module.css"

const CarDetails = () => {
	const { id } = useParams<{ id: string }>();

  const { data: car, isLoading, error } = useQuery({
    queryKey: ["car", id],
    queryFn: () => getCarById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;

  if (error || !car) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
        <div className={css.item}>
        <div className={css.header}>
            <h2>{car.brand}</h2>
        </div>
        <p className={css.content}>{car.description}</p>
        <p className={css.date}>{car.img}</p>
        </div>
    </div>

  );
};

export default CarDetails;

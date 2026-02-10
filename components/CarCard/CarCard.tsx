"use client";

import Link from "next/link";
import Image from 'next/image';
import { Car } from "@/lib/types/car";
import { mileageRange } from "@/lib/utils/mileageRange";
import { useFavoritesStore } from "@/lib/store/favoritesStore";
import css from "./CarCard.module.css"

export default function CarCard({ car }: { car: Car }) {
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

    return (
    <div>
        <li>
            <Image src={car.img} alt={car.brand} width={276} height={268} className={css.carImg} />
            <div className={css.carInfo}>
                <h3>{car.brand} {car.model} {car.year} ${car.rentalPrice}</h3>
                <p>{car.address} { car.rentalCompany } {car.type} {mileageRange(car.mileage)}</p>
            </div>
            <button onClick={() => toggleFavorite(car)}>
                <Image
                    src="/icons/like-non-active.svg"
                    alt="non-active-like-icon"
                    width={16}
                    height={16}
                    priority
                />
            </button>
            <Link href={`/catalog/${car.id}`} className={css.button}>Read more</Link>
        </li>
    </div>
  );
}

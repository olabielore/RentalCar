"use client";

import Link from "next/link";
import Image from 'next/image';
import { Car } from "@/lib/types/car";
import { mileageRange } from "@/lib/utils/mileageRange";
import { useFavoritesStore } from "@/lib/store/favoritesStore";
import { getCityCountry } from "@/lib/utils/getCityCountry";
import css from "./CarCard.module.css"


type CarCardProps = {
    car: Car;
}
  
export default function CarCard({ car }: CarCardProps) {
    const { city, country } = getCityCountry(car.address);
    const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
    const favorites = useFavoritesStore((s) => s.favorites);
  
    const isFavorite = favorites.some((fav) => fav.id === car.id);
  
    return (
    <div>
        <li className={css.wrapper}>
            <Image src={car.img} alt={car.brand} width={276} height={268} className={css.carImg} />
            <div className={css.carInfo}>
                <h3 className={css.title}>
                    <span>{car.brand} <span className={css.span}>{car.model}</span>, {car.year} |</span>
                    ${car.rentalPrice}
                </h3>
                <div className={css.parameters}>
                    <p className={css.details}> {city} | {country} | {car.rentalCompany} |</p>
                    <p className={css.details}>{car.type} | {mileageRange(car.mileage)}</p>
                </div>
                <Link href={`/catalog/${car.id}`} className={css.button}>Read more</Link>
            </div>
                <Image
                onClick={() => toggleFavorite(car)}
                src={
                    isFavorite
                    ? "/icons/like-active.svg"
                    : "/icons/like-non-active.svg"
                }
                alt="like icon"
                width={16}
                height={16}
                className={css.likeSvg}
                />
        </li>
    </div>
  );
}

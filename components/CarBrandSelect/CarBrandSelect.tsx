"use client";

import { useState } from "react";
import Image from 'next/image';
import css from "./CarBrandSelect.module.css";

const brands = [
    "Aston Martin",
    "Audi",
    "BMW",
    "Bentley",
    "Buick",
    "Chevrolet",
    "Chrysler",
    "GMC",
    "HUMMER",
    "Hyundai",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lincoln",
    "MINI",
    "Mercedes-Benz",
    "Mitsubishi",
    "Nissan",
    "Pontiac",
    "Subaru",
    "Volvo"
];

type BrandSelectProps = {
  value?: string;
  onChange: (value: string) => void;
};

export default function BrandSelect({ value, onChange }: BrandSelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={css.wrapper}>
      <button
        type="button"
        className={css.control}
        onClick={() => setOpen(!open)}
      >
        {value || "Choose a brand"}
        <span />
        {open ? (
        <Image src="/icons/top.svg" alt="down-icon" width={16} height={16} className={css.downIcon} priority />
        ) : (
        <Image src="/icons/down.svg" alt="down-icon" width={16} height={16} className={css.downIcon} priority />
        )
        }
      </button>

      {open && (
        <ul className={css.dropdown}>
          {brands.map((brand) => (
            <li
              key={brand}
              className={css.option}
              onClick={() => {
                onChange(brand);
                setOpen(false);
              }}
            >
              {brand}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

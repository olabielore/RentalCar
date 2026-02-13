"use client";

import { useState } from "react";
import Image from 'next/image';
import css from "./PriceSelect.module.css";

const prices = [
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
    "100",
    "110",
    "120",
]

type PriceProps = {
  value?: string;
  onChange: (value: string) => void;
}

export default function PriceSelect ({ value, onChange }: PriceProps) {
  const [open, setOpen] = useState(false);

    return (
    <div className={css.wrapper}>
    <button
      type="button"
      className={css.control}
      onClick={() => setOpen(!open)}
    >
      {value ? `To $${value}` : "Choose a price"}
        {open ? (
            <Image src="/icons/top.svg" alt="down-icon" width={16} height={16} className={css.downIcon} priority />
        ) : (
            <Image src="/icons/down.svg" alt="down-icon" width={16} height={16} className={css.downIcon} priority />
        )
        }
    </button>

    {open && (
      <ul className={css.dropdown}>
        {prices.map((price) => (
          <li
            key={price}
            className={css.option}
            onClick={() => {
              onChange(price);
              setOpen(false);
            }}
          >
            {price}
          </li>
        ))}
      </ul>
    )}
  </div>
);
}
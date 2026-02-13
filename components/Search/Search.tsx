"use client";

import { useState } from "react";
import { useCarsStore } from "@/lib/store/carsStore";
import BrandSelect from "@/components/CarBrandSelect/CarBrandSelect"
import PriceSelect from "@/components/PriceSelect/PriceSelect"

import css from "./Search.module.css"

export default function Search () {
  const setSearch = useCarsStore((s) => s.setSearch);
  
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const submit = () => {
    setSearch({
      brand: brand || undefined,
      rentalPrice: price || undefined,
      minMileage: minMileage || undefined,
      maxMileage: maxMileage || undefined,
    });
  };

  return (
    <div className={css.wrapper}>
      <div>
        <p className={css.title}>Car brand</p>
        <BrandSelect
        value={brand}
        onChange={setBrand}/>
      </div>
      <div>
        <p className={css.title}>Price/ 1 hour</p>
        <PriceSelect
          value={price}
          onChange={setPrice}
        />
      </div>
      <div>
        <p className={css.title}>Сar mileage / km</p>
        <input className={ css.inputStyleBack } placeholder="From"  onChange={(e) => setMinMileage(e.target.value)} />
        <input className={ css.inputStyleFront } placeholder="To" onChange={(e) => setMaxMileage(e.target.value)} />
      </div>
      <button className={ css.searchButton} onClick={submit}>Search</button>
    </div>
  );
}

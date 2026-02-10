import Link from "next/link";
import Image from 'next/image';
import css from "./Banner.module.css"

export default function Banner() {
  return (
    <section className={css.bannerWrapper}>
        <Image
            src="/images/banner.jpg"
            alt="Banner"
            width={1440}
            height={700}
            priority
            className={css.bannerImage}
          />
        <div className={css.content}>
            <h1>Find your perfect rental car</h1>
            <p className={css.description}>Reliable and budget-friendly rentals for any journey</p>
            <Link href="/catalog" className={css.button}>View Catalog</Link>
        </div>
    </section>
  );
}



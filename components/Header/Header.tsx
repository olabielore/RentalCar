"use client";

import Link from 'next/link';
import Image from 'next/image';

import css from './Header.module.css';

const Header = () => {
  return (

    <header className={css.header}>
      <Link href='/' aria-label='Home' className={css.logo}>
        <Image
            src="/icons/logo.svg"
            alt="Logo"
            width={104}
            height={16}
            priority
        />
      </Link>
      <nav aria-label="Main Navigation" >
        <ul className={css.navigation}>
          <li className={css.navigationLink}>
            <Link href='/'>Home</Link>
          </li>
          <li className={css.navigationLink}>
            <Link href='/catalog'>Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
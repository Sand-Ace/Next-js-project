import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import MainHeaderBackground from "../Main-header/Main-Header_bg";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={logoImg}
            alt="food table with different kinds of fruits and beverages"
            priority
          />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

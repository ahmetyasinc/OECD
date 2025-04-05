"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import { FaGlobe } from "react-icons/fa";
import useLanguageStore from "@/store/languageStore";

export default function Navbar() {
  const { language, setLanguage } = useLanguageStore();

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="https://www.oecd.org/" className={styles.logo}>
          <Image src="/logo.png" alt="OECD Logo" width={150} height={55} />
        </Link>
        <div className={styles.menu}>
          <div className={styles.languageSelect}>
            <FaGlobe className={styles.icon} />
            <select value={language} onChange={handleChange}>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="tr">Türkçe</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}

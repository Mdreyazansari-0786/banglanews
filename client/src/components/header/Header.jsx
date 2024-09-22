import React from "react";
import styles from "./header.module.css";
import facebookImg from '../../assets/Images/facebook.png'
import ticktokImg from '../../assets/Images/tiktok.png'
import instagramImg from '../../assets/Images/instagram.png'
import youtubeImg from '../../assets/Images/youtube.png'
import { Link } from "react-router-dom";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";



const Header = () => {
  
  
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <img src={facebookImg} alt="facebook" width={24} height={24} />
        <img src={instagramImg} alt="instagram" width={24} height={24} />
        <img src={ticktokImg} alt="tiktok" width={24} height={24} />
        <img src={youtubeImg} alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>lamablog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Header;
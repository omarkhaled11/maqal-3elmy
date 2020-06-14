import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../theme';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.container}>
      <Link href="/">
        <a>
          <img className={styles.logo} src="/logo/red.svg" alt="logo" />
        </a>
      </Link>
      <div className={styles.menu_button}>
        <img
          className={styles.menu_button_icon}
          src="/icons/menu.svg"
          alt="menu"
        />
      </div>
    </div>
  </div>
);

export default Header;

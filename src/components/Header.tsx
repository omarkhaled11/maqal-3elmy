import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../theme';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <Link href="/">
      <a>
        <img className={styles.logo} src="/logo/red.svg" alt="logo" />
      </a>
    </Link>
    <div className={styles.menu_button}>
      <div className={styles.menu_button_text}>القائمة</div>
    </div>
  </div>
);

export default Header;

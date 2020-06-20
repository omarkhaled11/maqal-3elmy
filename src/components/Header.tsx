import Link from 'next/link';

import Menu from './Menu';

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
        <Menu />
      </div>
    </div>
  </div>
);

export default Header;

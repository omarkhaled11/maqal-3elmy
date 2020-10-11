import Link from 'next/link';

import Menu from './Menu';

import styles from './Header.module.scss';

const Header = ({ disciplines }) => (
  <div className={styles.header}>
    <div className={styles.container}>
      <div className={styles.menu_button}>
        <Menu disciplines={disciplines} />
      </div>
      <Link href="/">
        <a>
          <img className={styles.logo} src="/logo/Logo_R.png" alt="logo" />
        </a>
      </Link>
    </div>
  </div>
);

export default Header;

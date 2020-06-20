import cn from 'classnames';

import Divider from '../components/Divider';

import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div>
      <input className={styles.input} type="checkbox" id="toggle" />
      <label
        className={cn(styles.label, styles.toggle_btn, styles.toggle_btn_cross)}
        htmlFor="toggle"
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </label>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href="/about">
              من نحن
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/editors">
              محررينا
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#">
              مقالاتنا
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/contact">
              تواصل معنا
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

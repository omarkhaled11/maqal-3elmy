import cn from 'classnames';

import styles from './Menu.module.scss';

const Menu = ({ disciplines }) => {
  const naturalSciencesDisciplines = disciplines?.reduce(
    (filtered, discipline) => {
      if (discipline.cluster.slug === 'natural-sciences') {
        filtered.push(discipline);
      }

      return filtered;
    },
    []
  );

  const socialSciencesDisciplines = disciplines?.reduce(
    (filtered, discipline) => {
      if (discipline.cluster.slug === 'social-sciences') {
        filtered.push(discipline);
      }

      return filtered;
    },
    []
  );

  const handleChange = e => {
    // @ts-ignore
    if (event?.target?.checked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }

    return null;
  };

  return (
    <div>
      <input
        className={styles.input}
        type='checkbox'
        id='toggle'
        onChange={handleChange}
      />
      <label
        className={cn(styles.label, styles.toggle_btn, styles.toggle_btn_cross)}
        htmlFor='toggle'
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </label>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href='/about'>
              من نحن
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href='/editors'>
              محررينا
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/about-en">
              About
            </a>
          </li>
        </ul>
        <div className={styles.sub_nav}>
          <ul className={styles.list} style={{ maxWidth: '80%' }}>
            <span className={styles.cluster_title}>العلوم الطبيعية</span>
            <div className={styles.cluster_items}>
              {naturalSciencesDisciplines.map(discipline => {
                return (
                  <li className={styles.item}>
                    <a
                      className={styles.link}
                      href={`/discipline/${discipline.slug}`}
                    >
                      {discipline.disciplineName}
                    </a>
                  </li>
                );
              })}
            </div>
          </ul>
          <ul className={styles.list} style={{ maxWidth: '20%' }}>
            <span className={styles.cluster_title}>العلوم الإجتماعية</span>
            <div className={styles.cluster_items}>
              {socialSciencesDisciplines.map((discipline, index) => {
                return (
                  <li className={styles.item} key={index}>
                    <a
                      className={styles.link}
                      href={`/discipline/${discipline.slug}`}
                    >
                      {discipline.disciplineName}
                    </a>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;

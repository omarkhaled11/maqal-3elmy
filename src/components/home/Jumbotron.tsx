import Link from 'next/link';
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import styles from './Jumbotron.module.scss';

const ArticleCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background_image_container}>
        <img src='/images/1.png' className={styles.background_image} />
      </div>

      <div className={styles.text_container}>
        <div className={styles.title_text_container}>
          <p className={styles.title_text}>
            نحن  باحث و باحثة نكتب عن
            المقالات العلمية بشكل مبسط
          </p>
        </div>
        <div className={styles.read_more_container}>
          <Link href='/about'>
            <a className={styles.read_more_link}>
              <p className={styles.read_more_text}>إقرأ المزيد</p>
              <div className={styles.arrow_icon} />
            </a>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ArticleCard;

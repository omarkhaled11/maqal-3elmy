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
      <div className={styles.text_container}>
        <p className={styles.text}>
          نحن <span className={styles.text_red}>١٠٠</span> باحث و باحثة نكتب عن
          المقالات العلمية بشكل مبسط
        </p>
        <Link href="/about">
          <a>
            <p className={styles.read_more}>إقرأ المزيد</p>
          </a>
        </Link>
      </div>
      <ScrollLink
        className={styles.read_more_container}
        hashSpy={true}
        smooth={true}
        spy={true}
        isDynamic={true}
        to="new_articles"
      >
        <span className={styles.read_more_button}></span>
      </ScrollLink>
    </div>
  );
};

export default ArticleCard;

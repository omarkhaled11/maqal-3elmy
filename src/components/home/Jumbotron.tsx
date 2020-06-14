import Link from 'next/link';

import styles from './Jumbotron.module.scss';

const ArticleCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <p className={styles.text}>
          نحن ١٠٠ باحث و باحثة نكتب عن المقالات العلمية بشكل مبسط
        </p>

        {/* <img src="/images/home.png"></img> */}
      </div>
      <div className={styles.read_more_container}>
        <p className={styles.read_more}>إقرأ المزيد</p>
        {/* Icon */}
      </div>
    </div>
  );
};

export default ArticleCard;

import Link from 'next/link';

import styles from './Jumbotron.module.scss';

const ArticleCard = ({ article, fullHeight, reverse = false }) => {
  return (
    <div
      className={styles.container}
      style={{
        height: fullHeight ? '85vh' : 380,
        flexDirection: reverse ? 'row-reverse' : 'row',
      }}
    >
      <div className={styles.background_image_container}>
        <img src={article?.image} className={styles.background_image} />
      </div>

      <div className={styles.text_container}>
        <div className={styles.title_text_container}>
          <p className={styles.title_text}>
            {article?.title}
          </p>
        </div>
        <div className={styles.read_more_container}>
          <Link href={`/article/${article.slug}`}>
            <a className={styles.read_more_link}>
              <p className={styles.read_more_text}>إقرأ هذا المقال</p>
              <div className={styles.arrow_icon} />
            </a>
          </Link>
          {/* <Link href='/about'>
            <a className={styles.read_more_link}>
              <p className={styles.read_more_text}>
                إستكشف جميع المقالات في هذا العدد
              </p>
              <div className={styles.arrow_icon} />
            </a>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

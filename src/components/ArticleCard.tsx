import Link from 'next/link';

import styles from './ArticleCard.module.scss';

const ArticleCard = ({ article, maxWidth = false }) => {
  const { title, slug, discipline, readingTimeInMinutes } = article;

  return (
    <Link href="/article/[slug]" as={`/article/${slug}`}>
      <div className={`${styles.container} ${maxWidth && styles.maxWidth}`}>
        <div className={styles.discipline}>{discipline?.disciplineName}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.reading_time}>
          <div>
            مدة القراءة:{' '}
            <span className={styles.reading_time_value}>
              {readingTimeInMinutes} دقائق
            </span>
          </div>
        </div>
        <div className={styles.go_to}>إلى المقال</div>
      </div>
    </Link>
  );
};

export default ArticleCard;

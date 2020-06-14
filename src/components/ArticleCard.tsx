import Link from 'next/link';

import styles from './ArticleCard.module.scss';

const ArticleCard = ({ article }) => {
  const { title, slug, discipline, readingTimeInMinutes } = article;

  return (
    <Link href="/post/[slug]" as={`/post/${slug}`}>
      <div className={styles.container}>
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

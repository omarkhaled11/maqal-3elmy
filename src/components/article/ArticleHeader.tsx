import moment from 'moment';
import Link from 'next/link';

import styles from './ArticleHeader.module.scss';

moment.locale('ar');

const ArticleHeader = ({ article }) => {
  const {
    title,
    readingTimeInMinutes,
    discipline,
    authors,
    linguistics,
    publishDate,
  } = article;
  return (
    <div className={styles.article_header_container}>
      <div className={styles.article_header}>
        <div className={styles.discipline_text}>
          {discipline.disciplineName}
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.info_row}>
          {!!readingTimeInMinutes && (
            <div className={styles.info_label}>
              {' '}
              مدة القراءة:{' '}
              <span className={styles.info_value}>
                {readingTimeInMinutes}{' '}
                {readingTimeInMinutes > 10 ? 'دقيقة' : 'دقائق'}
              </span>
            </div>
          )}
        </div>
        <div className={styles.info_row}>
          <div className={styles.info_label}>
            المحررين:{' '}
            {authors
              .filter(a => a)
              .map((author, index) => (
                <Link href={author.slug ? `/editor/${author.slug}` : `#`}>
                  <a>
                    <span
                      className={`${styles.info_value} ${styles.author_link}`}
                    >
                      {index === authors.length - 1
                        ? author.name
                        : `${author.name} / `}
                    </span>
                  </a>
                </Link>
              ))}
          </div>
        </div>
        <div className={styles.info_row}>
          {linguistics && linguistics.length > 0 && (
            <div className={styles.info_label}>
              المدققين اللغويين:{' '}
              {linguistics
                .filter(a => a)
                .map((author, index) => (
                  <Link href={author.slug ? `/editor/${author.slug}` : `#`}>
                    <a>
                      <span
                        className={`${styles.info_value} ${styles.author_link}`}
                      >
                        {index === linguistics.length - 1
                          ? author.name
                          : `${author.name} / `}
                      </span>
                    </a>
                  </Link>
                ))}
            </div>
          )}
        </div>
        <div className={styles.info_row}>
          <div className={styles.info_label}>
            تحريراً في {moment(publishDate).format('LL')}
          </div>
        </div>
      </div>
      <div className={styles.article_header_left} />
    </div>
  );
};

export default ArticleHeader;

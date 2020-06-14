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
      <div>
        {/* <ReadMoreText>

            </ReadMoreText> */}
        {/* Icon */}
      </div>
    </div>
  );
};

export default ArticleCard;

import ArticleCard from './ArticleCard';

import styles from './ArticleList.module.scss';

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.articles}>
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;

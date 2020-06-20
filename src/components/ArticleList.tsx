import ArticleCard from '../components/ArticleCard';

import styles from './ArticleList.module.scss';

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.articles}>
      <ArticleCard article={articles[1]} />
      <ArticleCard article={articles[1]} />
      <ArticleCard article={articles[1]} />
      <ArticleCard article={articles[1]} />
      <ArticleCard article={articles[1]} />

      {articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </div>
  );
};

export default ArticleList;

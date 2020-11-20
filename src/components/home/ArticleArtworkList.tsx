import ListItem from './Jumbotron';

import styles from './ArticleArtworkList.module.scss';

const ArticleArtworkList = ({ articles }) => {
  return (
    <div className={styles.articles}>
      {articles.map((article, index) => (
        <ListItem fullHeight={false} article={article} reverse={index % 2 === 0}  />
      ))}
    </div>
  );
};

export default ArticleArtworkList;

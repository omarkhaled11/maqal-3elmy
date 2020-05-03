import React from 'react';
import Link from 'next/link';

const ArticleCard = ({ article }) => {
  const { title, slug } = article;
  return (
    <li>
      <h1>{title}</h1>
      <Link href="/blog/[slug]" as={`/blog/${slug}`}>
        <a>{slug}</a>
      </Link>
    </li>
  );
}

export default ArticleCard;
